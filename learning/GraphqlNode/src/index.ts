import SetupServer from "./server"


(async (): Promise<void> => {
    const server = new SetupServer()
    server.start()
})()