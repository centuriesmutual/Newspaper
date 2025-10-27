# Quick Start Guide - Centuries Mutual Deployment

## 🚀 Quick Deployment Checklist

### Initial Setup (One-time)

- [ ] Connect to OVH server via SSH
- [ ] Run `./deploy.sh` on server
- [ ] Configure GitLab CI/CD variables
- [ ] Point domains to server IP
- [ ] Run Certbot for SSL certificates
- [ ] Deploy application

### GitLab CI/CD Variables Required

```
SSH_PRIVATE_KEY      → Your private SSH key
DEPLOY_SERVER        → Your server IP
DEPLOY_USER          → SSH username
AUTH0_SECRET         → Already configured
AUTH0_CLIENT_ID      → From Auth0 dashboard
AUTH0_CLIENT_SECRET  → From Auth0 dashboard
```

### Domains & Ports

| Domain | Port | Directory |
|--------|------|-----------|
| centuriesmutual.com | 3000 | /var/www/centuriesmutual-home |
| editor.centuriesmutual.com | 4000 | /var/www/centuriesmutual-editor |
| admin.centuriesmutual.com | 5000 | /var/www/centuriesmutual-admin |
| campaign.centuriesmutual.com | 6000 | /var/www/centuriesmutual-campaign |

## 📋 Common Commands

### PM2 Management

```bash
# Check status
pm2 status

# Restart specific app
pm2 restart centuriesmutual-home

# Restart all apps
pm2 restart all

# View logs
pm2 logs centuriesmutual-home

# Monitor in real-time
pm2 monit

# Stop an app
pm2 stop centuriesmutual-home

# Delete an app
pm2 delete centuriesmutual-home
```

### GitLab Deployment

```bash
# Automatic deployment on push to main branch
git push origin main

# Manual deployment via GitLab UI
# Go to: CI/CD → Pipelines → Run pipeline
```

### Nginx Management

```bash
# Check status
sudo systemctl status nginx

# Test configuration
sudo nginx -t

# Reload configuration
sudo nginx -s reload

# Restart
sudo systemctl restart nginx

# View error logs
sudo tail -f /var/log/nginx/error.log
```

### SSL Certificate Management

```bash
# Test renewal
sudo certbot renew --dry-run

# Manually renew
sudo certbot renew

# Get certificate for new domain
sudo certbot --nginx -d yourdomain.com
```

## 🆘 Emergency Rollback

```bash
# SSH into server
ssh your-username@your-server-ip

# Run rollback script
./rollback.sh

# Follow prompts to select:
# 1. App name
# 2. Commit hash to rollback to
```

## 🔍 Troubleshooting

### App Not Starting

```bash
# Check PM2 logs
pm2 logs centuriesmutual-home

# Check if port is in use
sudo netstat -tlnp | grep 3000

# Check environment variables
cat /var/www/centuriesmutual-home/.env.production
```

### 502 Bad Gateway

```bash
# Check if app is running
pm2 status

# Restart app
pm2 restart centuriesmutual-home

# Restart Nginx
sudo systemctl restart nginx
```

### Out of Memory

```bash
# Check memory usage
free -h
pm2 monit

# Clear old logs
pm2 flush

# Restart apps
pm2 restart all
```

## 📊 Monitoring

### Check Server Resources

```bash
# Disk usage
df -h

# Memory usage
free -h

# CPU usage
top

# PM2 dashboard
pm2 monit
```

### Application Logs

```bash
# PM2 logs (all apps)
pm2 logs

# PM2 logs (specific app)
pm2 logs centuriesmutual-home --lines 100

# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

## 🔐 Security

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Configure firewall
sudo ufw allow 22   # SSH
sudo ufw allow 80   # HTTP
sudo ufw allow 443  # HTTPS
sudo ufw enable

# Check firewall status
sudo ufw status
```

## 📝 Environment Variables Template

Copy this to `/var/www/APP_NAME/.env.production`:

```env
# Auth0
AUTH0_SECRET=42890444fd825b449e84d0634def87253827c54bf0b4d967ec86a98177eafe84
AUTH0_BASE_URL=https://centuriesmutual.com
AUTH0_ISSUER_BASE_URL=https://dev-a6tfhplq28n7ket3.us.auth0.com
AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret

# Next.js
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://centuriesmutual.com
PORT=3000
```

## 🎯 Quick Links

- **GitLab Repository**: [Your GitLab Project URL]
- **Auth0 Dashboard**: https://manage.auth0.com
- **OVH Panel**: https://www.ovh.com/manager/
- **Server IP**: [Your Server IP]

## 📞 Support

For issues:
1. Check PM2 logs: `pm2 logs`
2. Check Nginx logs: `/var/log/nginx/`
3. Review deployment guide: `deployment-guide.md`

---

**Last Updated**: 2024
**Version**: 1.0



