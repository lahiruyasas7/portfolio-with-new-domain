import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { code1, code2, code3, code4, code5 } from "./code-snippets";

const React19Post = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">
        React 19: What&apos;s New and Exciting
      </h1>
      <p className="text-gray-100 mb-6">
        React 19 brings a wave of new features, transforming how developers
        handle state, errors, and asynchronous tasks. These updates empower
        developers, making their workflows smoother and applications faster.
        Let’s dive into the latest enhancements, exploring how they enhance
        development and boost efficiency.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Introducing New Features in React 19 🚀
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Actions for Asynchronous Functions
      </h3>
      <p className="text-gray-100 mb-4">
        React 19 simplifies handling asynchronous requests with the introduction
        of Actions. This feature automatically manages pending states, errors,
        and optimistic updates for you.
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        className="rounded-lg mb-6"
      >
        {code1}
      </SyntaxHighlighter>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Simplified Form Handling
      </h3>

      <p className="text-gray-100 mt-10">
        The new <code>&lt;form&gt;</code> Actions automate form submissions,
        providing built-in handling for form states with the useActionState
        hook. This hook wraps actions, managing pending states and results
        seamlessly. It replaces the previously named useFormState from earlier
        releases.
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        className="rounded-lg mb-6"
      >
        {code2}
      </SyntaxHighlighter>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Optimistic Updates with useOptimistic
      </h3>
      <p className="text-gray-100 mt-10">
        The useOptimistic hook allows developers to display changes instantly on
        the UI while the actual data mutation happens in the background. This
        hook manages the temporary UI state, reverting to the original state in
        case of errors.
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        className="rounded-lg mb-6"
      >
        {code3}
      </SyntaxHighlighter>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Accessing Form Status with useFormStatus
      </h3>
      <p className="text-gray-100 mt-10">
        The useFormStatus hook is introduced to access the status of form
        submissions directly, ideal for designing components that need to
        reflect the submission state without prop drilling.
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        className="rounded-lg mb-6"
      >
        {code4}
      </SyntaxHighlighter>

      <h3 className="text-xl font-semibold mt-6 mb-2">New Reading API: use</h3>

      <p className="text-gray-100 mt-10">
        The new use API is designed for reading resources like promises and
        contexts within the render phase, supporting conditional reads. This API
        helps in managing data dependencies more effectively within the React
        components.
      </p>
      <p className="text-gray-100 mt-10">
        These enhancements in React 19 are designed to improve productivity and
        efficiency, allowing developers to focus more on creating dynamic,
        user-friendly applications. For more detailed documentation and
        additional examples, visit the React official documentation.
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        className="rounded-lg mb-6"
      >
        {code5}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-semibold mb-2">
        Introducing New Features in React 19 🚀
      </h2>

      <p className="text-gray-100 mt-10">
        React 19 enhances the capabilities of React applications with the
        introduction of Server Components and Server Actions. These features
        allow developers to optimize performance and resource utilization by
        offloading certain tasks to the server.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Server Components</h3>

      <p className="text-gray-100 mt-5">
        Server Components in React 19 allow components to be rendered ahead of
        time, either at build time on a CI server or per request on a web
        server. This feature separates the rendering environment from the client
        application or the typical server-side rendering (SSR) setup. React 19
        integrates all features of Server Components from the Canary channel,
        ensuring that libraries using Server Components can specify React 19 as
        a peer dependency.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Server Actions</h3>

      <p className="text-gray-100 mt-5">
        Server Actions are a new functionality that allows Client Components to
        invoke asynchronous functions executed on the server. Defined with the
        “use server” directive, these actions enable frameworks to automatically
        link server functions to Client Components. When invoked from the
        client, a request is made to the server to execute the function and
        return the results. This process is seamless and managed entirely by the
        framework.
      </p>

      <p className="text-gray-100 mt-10">
        In React 19, the incorporation of server components directly into React
        offers numerous benefits:
      </p>

      <ul className="list-disc list-inside text-gray-100 mt-6">
        <li>
          <strong>Improved SEO:</strong> The inclusion of server-rendered
          components enhances search engine optimization by ensuring that web
          crawlers have access to more accessible content.
        </li>
        <li>
          <strong>Enhanced Performance:</strong> Server components contribute to
          quicker initial page loads and overall performance enhancements,
          especially for applications with substantial content loads.
        </li>
        <li>
          <strong>Efficient Server-Side Execution:</strong> With server
          components, executing code on the server becomes seamless and
          efficient, facilitating tasks such as API calls.
        </li>
      </ul>
    </div>
  );
};

export default React19Post;
