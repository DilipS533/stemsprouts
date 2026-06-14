Sanity Studio (scaffold)

This folder contains a starter Sanity Studio configuration and schema files.

To run locally (after installing Sanity CLI):

```bash
cd studio
npm install
npx sanity@latest init --create-project "LLE STEM" --dataset production
# or configure an existing project and dataset
npm run start
```

The schemas are in `studio/schemas/` and include: homepage, program, partner, testimonial, officer.
