# Complete Deployment Instructions for 158.69.215.151

## Server Details
- **IP**: 158.69.215.151
- **Username**: ubuntu
- **Password**: AfwWb5BbGUYh
- **VPS**: vps-f6536776.vps.ovh.ca

## Step-by-Step Deployment

### Step 1: Connect to Server
Open Terminal on your Mac and run:

\`\`\`bash
ssh ubuntu@158.69.215.151
\`\`\`

Enter password when prompted: `AfwWb5BbGUYh`

### Step 2: Run Server Setup
Once connected, paste this entire command block:

\`\`\`bash
sudo apt-get update && sudo apt-get upgrade -y && \
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && \
sudo apt-get install -y nodejs && \
sudo npm install -g pm2 && \
sudo apt-get install -y nginx certbot python3-certbot-nginx && \
sudo mkdir -p /var/www/centuriesmutual-home /var/www/centuriesmutual-editor /var/www/centuriesmutual-admin /var/www/centuriesmutual-campaign && \
sudo chown -R $USER:$USER /var/www/centuriesmutual-* && \
echo "Setup complete!"
\`\`\`

### Step 3: Test Connection
After setup, verify by running:
\`\`\`bash
node --version
pm2 --version
\`\`\`

### Step 4: Deploy Application
From your Mac (in a NEW terminal window, keep SSH open):

\`\`\`bash
cd /Users/customer/Desktop/Home-3
scp -r * ubuntu@158.69.215.151:/var/www/centuriesmutual-home/
\`\`\`

You'll be prompted for the password again: `AfwWb5BbGUYh`

### Step 5: Build and Start App
Back in your SSH session:

\`\`\`bash
cd /var/www/centuriesmutual-home
npm install
npm run build
pm2 start npm --name "centuriesmutual-home" -- start
pm2 save
pm2 startup
\`\`\`

### Step 6: Configure Nginx
Create Nginx config for your domain:

\`\`\`bash
sudo tee /etc/nginx/sites-available/centuriesmutual > /dev/null <<'EOF'
server {
    listen 80;
    server_name centuriesmutual.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
