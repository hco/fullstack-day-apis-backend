import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../backend/index';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: '/trpc',
        }),
    ],
});

const start = async () => {
    const appNode = document.getElementById('app')!
    const users = await trpc.userList.query()

    console.log(users)

    // empty the appNode
    appNode.innerHTML = ''


    users.forEach(user => {
        const userNode = document.createElement('div')
        userNode.innerHTML = user
        appNode.appendChild(userNode)
    })
}


start()

console.log("Hello World")
