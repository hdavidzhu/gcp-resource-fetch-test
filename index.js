const Spanner = require("@google-cloud/spanner").Spanner;

const CREDENTIALS = require("./credentials.json");
const PROJECT_IDS = ["insert-project-ids", "here"]; // TODO: Change this

(async () => {
  for (const projectId of PROJECT_IDS) {
    console.log("projectId: ", projectId);

    const spanner = new Spanner({
      credentials: CREDENTIALS,
      projectId,
    });

    const [instances] = await spanner.getInstances();
    console.log("instances: ", JSON.stringify(instances));

    for (const instance of instances) {
      const [databases] = await instance.getDatabases();
      console.log("databases: ", JSON.stringify(databases));
    }
  }
})().catch((err) => {
  throw err;
});
