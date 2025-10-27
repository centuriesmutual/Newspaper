# Centuries Mutual - OVH Deployment Package Summary

## 📦 What's Included

This package provides everything you need to deploy the Centuries Mutual platform to your OVH Ubuntu 22.04 server with automated CI/CD.

## 📄 Files Overview

### 1. **`.gitlab-ci.yml`**
**Purpose**: GitLab CI/CD pipeline configuration  
**What it does**:
- Builds your Next.js app
- Deploys to your OVH server via SSH
- Restarts PM2 processes automatically
- Runs on push to main branch

**Configuration Required**:
- Add CI/CD variables in GitLab (SSH_PRIVATE_KEY, DEPLOY_SERVER, etc.)

### 2. **`deploy.sh`**
**Purpose**: Initial server setup script  
**What it does**:
- Installs Node.js 20
- Installs and configures PM2
- Installs and configures Nginx
- Installs Certbot for SSL
- Creates application directories
- Sets up reverse proxy configurations
- Creates PM2 ecosystem config

**How to use**:
```bash
chmod +x deploy.sh
./deploy.sh
```

### 3. **`rollback.sh`**
**Purpose**: Emergency rollback script  
**What it does**:
- Allows you to rollback to a previous Git commit
- Stops the app, reverts code, rebuilds, and restarts

**How to use**:
```bash
chmod +x rollback.sh
./rollback.sh
# Follow the prompts
```

### 4. **`deployment-guide.md`**
**Purpose**: Comprehensive deployment documentation  
**Contents**:
- Step-by-step deployment instructions
- GitLab CI/CD configuration guide
- Environment variables setup
- SSL certificate configuration
- Troubleshooting guide
- Security best practices

### 5. **`QUICK_START.md`**
**Purpose**: Quick reference guide  
**Contents**:
- Common commands
- Quick troubleshooting tips
- Monitoring commands
- Emergency procedures

### 6. **`.gitignore` (Updated)**
**Purpose**: Exclude sensitive files from Git  
**Now excludes**:
- Environment files (.env*)
- Deployment scripts
- GitLab CI config (optional)

## 🏗️ Architecture

### Applications & Ports

| Application | Domain | Port | Directory |
|-------------|--------|------|-----------|
| Main Site | centuriesmutual.com | 3000 | /var/www/centuriesmutual-home |
| Editor Portal | editor.centuriesmutual.com | 4000 | /var/www/centuriesmutual-editor |
| Admin Portal | admin.centuriesmutual.com | 5000 | /var/www/centuriesmutual-admin |
| Campaign Portal | campaign.centuriesmutual.com | 6000 | /var/www/centuriesmutual-campaign |

### Technology Stack

- **Runtime**: Node.js 20
- **Process Manager**: PM2
- **Web Server**: Nginx (reverse proxy)
- **SSL**: Let's Encrypt (via Certbot)
- **CI/CD**: GitLab CI/CD
- **Framework**: Next.js 14

## 🚀 Deployment Flow

```
┌─────────────────┐
│  Code Change    │
│  (Git Push)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitLab CI/CD   │
│  1. Build       │
│  2. Deploy      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  OVH Server     │
│  1. SSH in      │
│  2. Sync files  │
│  3. Restart PM2 │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Users Access   │
│  via Nginx      │
└─────────────────┘
```

## 📋 Pre-Deployment Checklist

### On OVH Server
- [ ] Ubuntu 22.04 installed
- [ ] SSH access configured
- [ ] Firewall configured (ports 22, 80, 443)
- [ ] Domain names point to server IP

### In GitLab
- [ ] Repository created
- [ ] SSH_PRIVATE_KEY variable added
- [ ] DEPLOY_SERVER variable added
- [ ] DEPLOY_USER variable added
- [ ] AUTH0 credentials added
- [ ] Other environment variables added

### In Auth0
- [ ] Application configured
- [ ] Callback URLs configured
- [ ] Logout URLs configured
- [ ] CORS settings configured

## 🎯 Quick Start

1. **Transfer deploy.sh to server**:
   ```bash
   scp deploy.sh user@your-server-ip:~/
   ```

2. **SSH into server and run**:
   ```bash
   ssh user@your-server-ip
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Configure GitLab CI/CD variables**:
   - Go to Settings → CI/CD → Variables
   - Add required variables

4. **Push code to main branch**:
   ```bash
   git push origin main
   ```

5. **Get SSL certificates**:
   ```bash
   sudo certbot --nginx -d centuriesmutual.com -d editor.centuriesmutual.com ...
   ```

## 🔧 Common Tasks

### View Application Status
```bash
pm2 status
pm2 logs
```

### Restart Application
```bash
pm2 restart centuriesmutual-home
```

### Update Application
```bash
git pull origin main
npm ci
npm run build
pm2 restart centuriesmutual-home
```

### Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t
```

### Rollback
```bash
./rollback.sh
```

## 🔐 Security Features

- Environment variables stored securely in GitLab
- SSL/TLS certificates via Let's Encrypt
- HTTPS enforced via Nginx
- PM2 process isolation
- Firewall configured (UFW)
- Regular security updates

## 📊 Monitoring

### Check Server Health
```bash
# Disk usage
df -h

# Memory usage
free -h

# PM2 monitoring
pm2 monit
```

### View Logs
```bash
# Application logs
pm2 logs

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## 🆘 Support & Troubleshooting

### Common Issues

**502 Bad Gateway**
- Check if app is running: `pm2 status`
- Restart app: `pm2 restart centuriesmutual-home`
- Restart Nginx: `sudo systemctl restart nginx`

**SSL Certificate Issues**
- Renew manually: `sudo certbot renew`
- Check expiry: `sudo certbot certificates`

**Out of Memory**
- Check usage: `free -h`
- Clear logs: `pm2 flush`
- Restart apps: `pm2 restart all`

### Get Help
1. Check `deployment-guide.md` for detailed troubleshooting
2. Check `QUICK_START.md` for common commands
3. Review PM2 logs: `pm2 logs`
4. Review Nginx logs: `/var/log/nginx/`

## 📚 Documentation Files

- **`deployment-guide.md`**: Complete deployment instructions
- **`QUICK_START.md`**: Quick reference guide
- **`DEPLOYMENT_SUMMARY.md`**: This file
- **Original setup docs**: AUTH0_SETUP.md, BOX_SETUP.md, etc.

## ✅ Success Criteria

You'll know deployment is successful when:

1. ✅ Domains resolve to your server
2. ✅ HTTPS works (certificate installed)
3. ✅ Applications are running (pm2 status shows green)
4. ✅ No errors in PM2 logs
5. ✅ No errors in Nginx logs
6. ✅ Authentication works (Auth0 login)
7. ✅ Pages load correctly

## 🎉 Next Steps

After successful deployment:

1. Monitor application performance
2. Set up regular backups
3. Configure monitoring alerts
4. Document your custom configurations
5. Plan for scaling if needed

---

**Created**: 2024  
**Version**: 1.0  
**Platform**: OVH Ubuntu 22.04  
**Framework**: Next.js 14



