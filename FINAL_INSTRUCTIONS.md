# 🚀 Final Deployment Instructions - OVH Server

**Server IP**: `158.69.215.151`  
**Password**: `AfwWb5BbGUYh`  
**IPv6**: `2607:5300:205:200::aab`

## Step 1: Connect to Server

Open Terminal on your Mac and run:

```bash
ssh root@158.69.215.151
```

Enter password: `AfwWb5BbGUYh`

## Step 2: Run This ONE Command

Once connected, copy and paste this entire block:

```bash
apt-get update -qq && apt-get upgrade -y -qq && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs npm nginx certbot python3-certbot-nginx && npm install -g pm2 && mkdir -p /var/www/centuriesmutual-{home,editor,admin,campaign} && chown -R $USER:$USER /var/www/centuriesmutual-* && tee /etc/nginx/sites-available/centuriesmutual-home > /dev/null <<'EOFNGINX'
server {
    listen 80;
    server_name centuriesmutual.com;
    location / { proxy_pass http://localhost:3000; proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade'; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto $scheme; proxy_cache_bypass $http_upgrade; }
}
EOFNGINX
tee /etc/nginx/sites-available/centuriesmutual-editor > /dev/null <<'EOFNGINX'
server { listen 80; server_name editor.centuriesmutual.com; location / { proxy_pass http://localhost:4000; proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade'; proxy_set_header Host $host; proxy_cache_bypass $http_upgrade; } }
EOFNGINX
tee /etc/nginx/sites-available/centuriesmutual-admin > /dev/null <<'EOFNGINX'
server { listen 80; server_name admin.centuriesmutual.com; location / { proxy_pass http://localhost:5000; proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade'; proxy_set_header Host $host; proxy_cache_bypass $http_upgrade; } }
EOFNGINX
tee /etc/nginx/sites-available/centuriesmutual-campaign > /dev/null <<'EOFNGINX'
server { listen 80; server_name campaign.centuriesmutual.com; location / { proxy_pass http://localhost:6000; proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade'; proxy_set_header Host $host; proxy_cache_bypass $http_upgrade; } }
EOFNGINX
ln -sf /etc/nginx/sites-available/centuriesmutual-home /etc/nginx/sites-enabled/ && ln -sf /etc/nginx/sites-available/centuriesmutual-editor /etc/nginx/sites-enabled/ && ln -sf /etc/nginx/sites-available/centuriesmutual-admin /etc/nginx/sites-enabled/ && ln -sf /etc/nginx/sites-available/centuriesmutual-campaign /etc/nginx/sites-enabled/ && rm -f /etc/nginx/sites-enabled/default && nginx -t && systemctl restart nginx && echo "✅ Server setup complete!"
```

## Step 3: Deploy Your Application

In a NEW Terminal window (keep the SSH connection open), run:

```bash
cd /Users/customer/Desktop/Home-3
scp -r . root@158.69.215.151:/var/www/centuriesmutual-home/
```

Then back in your SSH terminal, run:

```bash
cd /var/www/centuriesmutual-home
npm install
npm run build
pm2 start npm --name "centuriesmutual-home" -- start
pm2 save
pm2 startup
```

## Step 4: Get SSL Certificates

```bash
certbot --nginx -d centuriesmutual.com -d editor.centuriesmutual.com -d admin.centuriesmutual.com -d campaign.centuriesmutual.com
```

Follow the prompts (enter your email, agree to terms).

## Step 5: Set Up Environment Variables

```bash
nano /var/www/centuriesmutual-home/.env.production
```

Paste this content:

```env
AUTH0_SECRET=42890444fd825b449e84d0634def87253827c54bf0b4d967ec86a98177eafe84
AUTH0_BASE_URL=https://centuriesmutual.com
AUTH0_ISSUER_BASE_URL=https://dev-a6tfhplq28n7ket3.us.auth0.com
AUTH0_CLIENT_ID=j0sBGVXdiwjz95DuVaXl4ErMnvDxFmnq
AUTH0_CLIENT_SECRET=jvQdXe_LiHIqPik-QklWdY_lXq3X7-Ic2CjMUxN2D7P_lbZ7FPnd6dQ40vzM7OHE
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://centuriesmutual.com
PORT=3000
```

Save: `Ctrl+O`, then `Enter`, then `Ctrl+X`

Restart your app:

```bash
pm2 restart centuriesmutual-home
```

## ✅ Done!

Your site should now be live at: **https://centuriesmutual.com**

---

## Troubleshooting

If you get "Permission denied" on SSH:
1. Make sure you're using `root` as the username
2. The password is exactly: `AfwWb5BbGUYh`
3. Try connecting from OVH web console instead

If something fails:
- Run `pm2 logs centuriesmutual-home` to see errors
- Check `nginx -t` to verify Nginx config
- Check `systemctl status nginx` for Nginx status



