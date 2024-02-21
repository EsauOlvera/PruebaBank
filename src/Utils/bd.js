import { createServer } from "miragejs"
import NetInfo from '@react-native-community/netinfo';

let serverInstance = null;

export const createDB = async (data) => {
    serverInstance = createServer({
        routes() {
            this.get("/api/banks", () => {
                return {
                    banks: data
                }
            })
        }
    })
}

export const shutdownDB = () => {
    if (serverInstance) {
        serverInstance.shutdown()
    }
}

export const isDBCreated = async () => {
    await fetch("/api/banks")
      .then(response => response.json())
      .then(data => {
        console.log("Datos registrados correctamente", data)
      })
      .catch(error => {
        console.error("Error al hacer la solicitud:", error)
      });
}


export const isConnectedToNetwork = async () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = NetInfo.addEventListener(state => {
        unsubscribe()
        if (state.isConnected) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
}
  