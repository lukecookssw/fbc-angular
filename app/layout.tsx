import React from "react";
import Header from "../components/ui/header";
import NavPanel from "../components/ui/nav-panel";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // TODO: Pull routes from GraphQL or something idk
  const course_routes = [
    { route: '/angular-cli', text: '1. Angular CLI' },
    { route: '/generating-components', text: '2. Generating Components' },
    { route: '/third-party-dependencies', text: '3. Third Party Dependencies' },
    { route: '/angular-services', text: '4. Angular Services' },
    { route: '/rxjs-observables', text: '5. RxJS and Observables' },
    { route: '/http-client', text: '6. Http Client' },
    { route: '/delete-companies', text: '7. Delete Companies' },
    { route: '/component-communication', text: '8. Component Communication' },
    { route: '/routing', text: '9. Routing' },
    { route: '/reactive-forms-add', text: '10. Reactive Forms (Add)' },
    { route: '/reactive-forms-edit', text: '11. Reactive Forms (Edit)' },
    { route: '/state-management', text: '12. State Management' },
    { route: '/code-splitting', text: '13. Code Splitting' },
    { route: '/testing', text: '14. Testing' },
  ];

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        <div className="flex flex-grow">
          <NavPanel routes={course_routes} />
          <div className="flex flex-col flex-grow">
            <Header />
            {/* TODO: Remove the fixed height from the main element */}
            <main className="p-4 flex-grow min-h-[calc(100vh-64px)]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
