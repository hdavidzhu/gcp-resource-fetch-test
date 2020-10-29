# gcp-resource-fetch-test

```bash
# Requirements:
# node v7.6

# 1. Clone the repo

# 2. Install dependencies
$ npm install

# 3. Download Vanta's service account private key as JSON
# - Visit https://console.cloud.google.com/iam-admin/serviceaccounts
# - Choose the project which holds the service account
# - Find service account. Should be called `vanta-scanner@<PROJECT_NAME>.iam.gserviceaccount.com
# - Under 'Keys', click 'ADD KEY' and create a new JSON private key. (Feel free to delete after this test)

# 4. Rename the downloaded JSON to credentials.json and place in this repo

# 5. Open `index.js` and change `PROJECT_IDS` to include your scoped GCP project IDS

# 6. Run in console
$ node index.js
```
