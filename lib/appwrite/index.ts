'use server';

import { cookies } from "next/headers";
import { appwriteConfig } from "./config";
import { Account, Avatars, Client, Databases, Storage } from "node-appwrite";

export const createSessionClient = async () => {
    const client = new Client();
    client.setEndpoint(appwriteConfig.endpoint);
    client.setProject(appwriteConfig.project);
    
    const session = (await cookies()).get("appwrite_session");

    if (!session || !session.value) {
        throw new Error("No session found in cookies");
    }

    if (session) {
        client.setSession(session.value);
    }

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }

    }
}

export const createAdminClient = async () => {
    const client = new Client();
    client.setEndpoint(appwriteConfig.endpoint);
    client.setProject(appwriteConfig.project);
    client.setKey(appwriteConfig.secretKey);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        },
        get storage() {
            return new Storage(client);
        },
        get avatars() {
            return new Avatars(client);
        }

    }
}