# Centuries Mutual OVH Server Deployment Guide

This guide will help you deploy the Centuries Mutual platform to your OVH Ubuntu 22.04 server.

## Prerequisites

- OVH Ubuntu 22.04 server
- SSH access to the server
- Domain names pointed to your server IP
- GitLab repository with your code

## Step 1: Initial Server Setup

### 1.1 Connect to Your Server

```bash
ssh root@your-server-ip
# or if using a specific user
ssh your-username@your-server-ip
```

### 1.2 Run the Deployment Script

Transfer the `deploy.sh` script to your server and make it executable:

```bash
chmod +x deploy.sh
./deploy.sh
```

This script will:
- Install Node.js 20
- Install and configure PM2
- Install and configure Nginx
- Install Certbot for SSL certificates
- Create necessary directories
- Set up reverse proxy configurations

## Step 2: Configure GitLab CI/CD Variables

Go to your GitLab project → Settings → CI/CD → Variables, and add:

### Required Variables:

1. **SSH_PRIVATE_KEY**
   - Type: Variable
   - Value: Your private SSH key (the one matching the public key you added to the server)

2. **DEPLOY_SERVER**
   - Type: Variable
   - Value: Your server IP address or domain

3. **DEPLOY_USER**
   - Type: Variable
   - Value: Your SSH username (usually `root` or your username)

4. **AUTH0_SECRET**
   - Type: Variable
   - Masked: Yes
   - Value: `42890444fd825b449e84d0634def87253827c54bf0b4d967ec86a98177eafe84`

5. **AUTH0_CLIENT_ID**
   - Type: Variable
   - Masked: Yes
   - Value: Your Auth0 client ID

6. **AUTH0_CLIENT_SECRET**
   - Type: Variable
   - Masked: Yes
   - Value: Your Auth0 client secret

7. **BOX_CLIENT_ID** (Optional)
   - Type: Variable
   - Masked: No
   - Value: Your Box client ID if using Box integration

8. **BOX_CLIENT_SECRET** (Optional)
   - Type: Variable
   - Masked: Yes
   - Value: Your Box client secret

## Step 3: Configure Environment Variables on Server

SSH into your server and create environment files for each application:

### Main Site (centuriesmutual.com)

```bash
nano /var/www/centuriesmutual-home/.env.production
```

Add the following content:

```env
# Auth0 Configuration
AUTH0_SECRET=42890444fd825b449e84d0634def87253827c54bf0b4d967ec86a98177eafe84
AUTH0_BASE_URL=https://centuriesmutual.com
AUTH0_ISSUER_BASE_URL=https://dev-a6tfhplq28n7ket3.us.auth0.com
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret

# Next.js Configuration
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://centuriesmutual.com
PORT=3000

# Box API Configuration (optional)
BOX_CLIENT_ID=your_box_client_id
BOX_CLIENT_SECRET=your_box_client_secret
BOX_PUBLIC_KEY_ID=your_box_public_key_id
BOX_ENTERPRISE_ID=your_box_enterprise_id
BOX_FOLDER_ID=your_box_folder_id
BOX_PRIVATE_KEY=your_box_private_key
BOX_PASSPHRASE=your_box_passphrase
```

Repeat this for each subdomain (editor, admin, campaign) with appropriate values.

## Step 4: Point Domains to Your Server

In your domain registrar's DNS settings, add A records:

```
centuriesmutual.com         → Your Server IP
editor.centuriesmutual.com  → Your Server IP
admin.centuriesmutual.com   → Your Server IP
campaign.centuriesmutual.com → Your Server IP
```

Wait for DNS propagation (can take up to 24 hours, usually less).

## Step 5: Get SSL Certificates

Once your domains are pointing to your server, run:

```bash
sudo certbot --nginx -d centuriesmutual.com -d editor.centuriesmutual.com -d admin.centuriesmutual.com -d campaign.centuriesmutual.com
```

Follow the prompts. Certbot will automatically configure Nginx with SSL.

## Step 6: First Deployment

### 6.1 Clone Repository

```bash
cd /var/www/centuriesmutual-home
git clone https://gitlab.com/your-username/your-repository.git .
```

### 6.2 Install Dependencies and Build

```bash
npm ci
npm run build
```

### 6.3 Start with PM2

```bash
pm2 start npm --name "centuriesmutual-home" -- start
pm2 save
```

## Step 7: Automated Deployments

Once everything is set up, GitLab CI/CD will automatically:

1. Build your app when you push to the main branch
2. Deploy to your server via SSH
3. Restart PM2 processes

To deploy manually through GitLab:
1. Go to your GitLab project
2. CI/CD → Pipelines
3. Click "Run pipeline"
4. Select your branch
5. Click "Run pipeline"

## Step 8: Monitoring and Maintenance

### Check Application Status

```bash
pm2 status
pm2 logs centuriesmutual-home
```

### Check Nginx Status

```bash
sudo systemctl status nginx
sudo nginx -t
```

### View Application Logs

```bash
# PM2 logs
pm2 logs

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## Step 9: Rollback (if needed)

If a deployment fails, you can rollback:

```bash
cd /var/www/centuriesmutual-home
git log  # Find the previous working commit
git reset --hard <previous-commit-hash>
npm ci
npm run build
pm2 restart centuriesmutual-home
```

## Troubleshooting

### Application won't start

1. Check logs: `pm2 logs centuriesmutual-home`
2. Check if port is in use: `sudo netstat -tlnp | grep 3000`
3. Check environment variables are set correctly

### Nginx 502 Bad Gateway

1. Check if the app is running: `pm2 status`
2. Check if the correct port is configured in Nginx
3. Restart Nginx: `sudo systemctl restart nginx`

### SSL Certificate Issues

```bash
sudo certbot renew --dry-run
sudo certbot renew
```

### Permission Issues

```bash
sudo chown -R $USER:$USER /var/www/centuriesmutual-*
```

## Security Best Practices

1. Keep your server updated: `sudo apt update && sudo apt upgrade -y`
2. Use strong passwords and SSH keys
3. Configure firewall: `sudo ufw allow 22 && sudo ufw allow 80 && sudo ufw allow 443 && sudo ufw enable`
4. Keep dependencies updated: `npm audit fix`
5. Regular backups of your data

## Useful Commands

```bash
# Restart all applications
pm2 restart all

# Stop an application
pm2 stop centuriesmutual-home

# Delete an application from PM2
pm2 delete centuriesmutual-home

# Reload Nginx config
sudo nginx -s reload

# Check disk space
df -h

# Check memory usage
free -h
pm2 monit
```

## Contact & Support

If you encounter issues, check:
- PM2 logs: `pm2 logs`
- Nginx logs: `/var/log/nginx/`
- Application logs in your project

For more information, visit the Centuries Mutual documentation.



