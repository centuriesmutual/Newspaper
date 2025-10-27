# Access Server via OVH Web Console

Since SSH is being reset, use OVH's web-based console.

## Steps:

1. **Go to**: https://www.ovhcloud.com/en/managed-private-cloud/
2. **Login** to your OVH account
3. **Navigate to**: Server → vps-f6536776.vps.ovh.ca
4. **Click**: "KVM Console" or "Web Console"

Alternatively, try this direct link:
- Go to: https://www.ovh.com/manager/dedicated/
- Find your VPS: vps-f6536776.vps.ovh.ca
- Click on "VNC" or "Console" button

## Once in the web console:

You'll see a terminal. Login with:
- Username: `ubuntu`
- Password: `AfwWb5BbGUYh`

Then run the setup commands from `COMPLETE_DEPLOYMENT_INSTRUCTIONS.md`

## Alternative: Wait and try SSH again

The connection reset might be temporary. Try again in 5-10 minutes:

```bash
ssh ubuntu@158.69.215.151
```

## If still having issues:

Contact OVH support or check:
1. OVH control panel for firewall settings
2. Make sure port 22 is open
3. Check if IP might be blocked

---

**Quick Setup Command** (once you get access):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && source ~/.bashrc && nvm install 20 && npm install -g pm2 && sudo apt-get update && sudo apt-get install -y nginx certbot python3-certbot-nginx
```
