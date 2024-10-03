What I Learned:

09/27/2024

1. Using prisma as an ORM for JavaScript sitting between app and database
2. Using the command 'npx prisma init --datasource-provider sqlite' to specify db to use (could be any database)
3. Migrating database using 'npx prisma migrate dev'. Looks a lot like python manage.py makemigrations/migrate
4. Creating a PrismaClient to make db queries using NextJS using PrismaClient from @prisma/client

5. I learned about Server Actions. Specifically:
   - Number one way to change data in a nextjs application
   - Closely integrated with HTML forms
   - Are functions that are called with values user entered into a form
   - We set the form's action attribute to the server action
6. Server actions are NOT sent to the browser. They stay and are ran on the server

09/28/2024

Server Components:

1. NextJS runs some code on the server and some code on the client
2. Prefer to use server components as much as possible (better performance and UX)
3. Server components are the default for components
4. Server components can use async await! No need for useEffect and useState when data fetching
5. Server components cannot use any kind of hook. This includes using a component that uses a hook inside a server component
6. We cannot use event handlers at all

Client Components:

1. Client components are basically the same components used in regular react
2. Client components need "use client" at the top
3. Client components cannot directly show a server component
4. Client components still get rendered one time on the server

Dynamic snippets (id, name, etc.):

1. Formatted like snippets/[id], where id can be any number. This makes it dynamic

Special File Names:

1. not-found.tsx can be used to show item not found at certain route
2. loading.tsx can be used to display a server component fetching some data
3. error.tsx displays when an error occurs in a server component
4. route.tsx defines an api endpoint
5. Next will search for the closest files to the current directory with these names

09/29/2024

1. We can create client components in NextJS by type "use client" at the top
2. We can embed client components inside of server components
3. Again, client components are rendered on the server on initial load or page refresh

10/01/2024

1. Typically, server components cannot pass event handlers down to client components
2. Their is one exception! Server componenets CAN pass server actions as props to client components
3. Another option is to define server actions in separate files and import them into client components as needed

Methods for calling server action from client component:

1. Use the bind method of a function and pass that in as the form action (e.g.editSnippet.bind(null, <piece of state>))
2. Use startTransition from react which ensures a change takes place (e.g. db operation) before navigating use to another page (e.g. startTransition(async () => { await editSnippet(code); } ))
3. Option 1 will work even if the user CANNOT run Javascript! Big upside.
4. Option 2 does not need to use bind, and is closer to common React behavior.

10/02/2024

1. In case form data is incorrect, all server actions need to do is return a form state object
2. useFormState injects a formState object into our HTML, and is sent along to the server action upon form submission
3. The formState object will be injected in a client component, which will be used to render an error message in HTML on the server
4. The object will then be sent to the user's browser (hence, no JavaScript is needed)
