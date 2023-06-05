import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "3om8upox",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token:
    "skV5ZQXwd55UvUwEA17xDMH4dKGyFXw1LSa4OXGt9nMtvEzL6JHVaitFOFpkrxIVLxGOfCkkr3jMmZcUHQP85YUmwsJYgOXZgCDBxPhVEyls7HlWyWDW01jFfYmixP1d9NEtmQY6EKSOkTXjRFf4QGRwP64MBVlx7jeiQXvDIZz4XJxkGRbv", // Only if you want to update content with the client
});
