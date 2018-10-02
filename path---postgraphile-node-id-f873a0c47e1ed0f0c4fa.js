webpackJsonp([0xbb8b015fd3ca],{447:function(e,n){e.exports={data:{remark:{html:'<h2 id="global-unique-object-identifier-nodeid"><a href="#global-unique-object-identifier-nodeid" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global Unique Object Identifier "nodeId"</h2>\n<p>We implement the <a href="https://facebook.github.io/relay/graphql/objectidentification.htm">Relay Global Object Identification\nSpecification</a>,\nso any table that has a primary key will automatically have a unique <code class="language-text">nodeId</code>\nfield available for queries and mutations. This is commonly used as the cache\nkey for your client library, e.g. with Apollo Client\'s <code class="language-text">dataIdFromObject</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> ApolloClient <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-link-http\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> InMemoryCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-cache-inmemory\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  dataIdFromObject<span class="token punctuation">:</span> object <span class="token operator">=></span> object<span class="token punctuation">.</span>nodeId <span class="token operator">||</span> <span class="token keyword">null</span>\n</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  link<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">HttpLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  cache\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>WARNING</strong>: by default, we call the Global Object Identifier <code class="language-text">nodeId</code> to\navoid clashing with the <code class="language-text">id</code> field that\'s common practice in database design.\nIf you wish to call the Global Object Identifier field <code class="language-text">id</code> instead (as is\nmandated by the Relay specification), you can do so with our <code class="language-text">--classic-ids</code>\nCLI flag. In doing so, any <code class="language-text">id</code> column will automatically be renamed to\n<code class="language-text">rowId</code>.</p>',frontmatter:{path:"/postgraphile/node-id/",title:"nodeId / id / Globally Unique Object Identification",showExamples:null}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"news",sections:[{id:"main",title:"Archive"},{id:"about",title:"About"}],pages:[{to:"/news/postgraphile-version-4/",title:"Version 4 Announcement",sectionId:"main",subpages:null},{to:"/news/press-kit/",title:"Press Kit",sectionId:"about",subpages:null}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides",subpages:[]},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides",subpages:[]},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides",subpages:[]},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides",subpages:[]},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides",subpages:[]},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference",subpages:[]}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"basics",title:"Operation"},{id:"customising",title:"Customising"},{id:"guides",title:"Guides"},{id:"community",title:"Community"},{id:"faq",title:"FAQ"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview",subpages:[]},{to:"/postgraphile/examples/",title:"EXAMPLES",sectionId:"overview",subpages:[]},{to:"/postgraphile/usage/",title:"Usage",sectionId:"overview",subpages:[{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"overview"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"overview"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"overview"}]},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview",subpages:[]},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview",subpages:[]},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"basics",subpages:[]},{to:"/postgraphile/namespaces/",title:"Namespaces",sectionId:"basics",subpages:null},{to:"/postgraphile/inflection/",title:"Inflection",sectionId:"basics",subpages:null},{to:"/postgraphile/tables/",title:"Tables",sectionId:"basics",subpages:[{to:"/postgraphile/relations/",title:"Relations",sectionId:"basics"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"basics"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"basics"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"basics"},{to:"/postgraphile/node-id/",title:"nodeId / id",sectionId:"basics"}]},{to:"/postgraphile/functions/",title:"Functions",sectionId:"basics",subpages:[{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"basics"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"basics"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"basics"},{to:"/postgraphile/function-restrictions/",title:"Function Restrictions",sectionId:"basics"}]},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"basics",subpages:[]},{to:"/postgraphile/security/",title:"Security",sectionId:"basics",subpages:[]},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"basics",subpages:[]},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"basics",subpages:[]},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"basics",subpages:[]},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"customising",subpages:[]},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"customising",subpages:[{to:"/postgraphile/make-extend-schema-plugin/",title:"makeExtendSchemaPlugin",sectionId:"customising"},{to:"/postgraphile/make-add-inflectors-plugin/",title:"makeAddInflectorsPlugin",sectionId:"customising"},{to:"/postgraphile/extending-raw/",title:"Graphile Engine",sectionId:"customising"},{to:"/postgraphile/plugin-gallery/",title:"Plugin Gallery",sectionId:"customising"}]},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"customising",subpages:[]},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides",subpages:[]},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides",subpages:[]},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"guides",subpages:[]},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides",subpages:[]},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/testing-jest/",title:"Testing with Jest",sectionId:"guides",subpages:[]},{to:"/postgraphile/community-plugins/",title:"Community Plugins",sectionId:"community",subpages:[]},{to:"/postgraphile/community-chat/",title:"Community Chat",sectionId:"community",subpages:[]},{to:"/postgraphile/code-of-conduct/",title:"Code of Conduct",sectionId:"community",subpages:[]},{to:"/postgraphile/introspection/",title:"Introspection?",sectionId:"faq",subpages:[]},{to:"/postgraphile/why-nullable/",title:"Why is it nullable?",sectionId:"faq",subpages:[]}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [3] >>> JSON",name:"graphile-build-pg",sections:[{id:"overview",title:"Usage"}],pages:[{to:"/graphile-build-pg/settings/",title:"Settings",sectionId:"overview",subpages:[]}]}}]},examples:{edges:[{node:{category:"plugins",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [0] >>> JSON",title:"Inflector",examples:[{title:"PgRenamePatchToChangeSetPlugin",example:'/**\n * Simply renames the `UserPatch` and `PostPatch` type names to be called\n * `UserChangeSet` and `PostChangeSet` instead.\n *\n * Not particularly useful, just an example.\n *\n * Replaces this inflector:\n * https://github.com/graphile/graphile-engine/blob/f3fb3878692c6959e481e517375da66503428dc5/packages/graphile-build-pg/src/plugins/PgBasicsPlugin.js#L309-L311\n */\nconst { makeAddInflectorsPlugin } = require("graphile-utils");\n\nmodule.exports = makeAddInflectorsPlugin({\n  patchType(typeName) {\n    // return this.upperCamelCase(`${typeName}-patch`);\n    return this.upperCamelCase(`${typeName}-change-set`);\n  },\n});\n',exampleLanguage:"javascript",result:"",resultLanguage:""},{title:"PgShortenAllRowsInflectorPlugin",example:'/**\n * Simply renames the `allUsers` and `allPosts` Query fields to `users` and\n * `posts` respectively.\n *\n * Not particularly useful, just an example.\n *\n * Replaces this inflector:\n * https://github.com/graphile/graphile-engine/blob/f3fb3878692c6959e481e517375da66503428dc5/packages/graphile-build-pg/src/plugins/PgBasicsPlugin.js#L460-L464\n */\nconst { makeAddInflectorsPlugin } = require("graphile-utils");\n\nmodule.exports = makeAddInflectorsPlugin({\n  allRows(table) {\n    return this.camelCase(\n      // Was: `all-${this.pluralize(this._singularizedTableName(table))}`\n      // Now:\n      this.pluralize(this._singularizedTableName(table))\n    );\n  },\n});\n',exampleLanguage:"javascript",result:"",resultLanguage:""}]}},{node:{category:"plugins",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [1] >>> JSON",title:"Types",examples:[{title:"PgNumericToFloatPlugin",example:'/**\n * Use of this plugin is NOT recommended, please see\n * PgSmallNumericToFloatPlugin for a more appropriate replacement if you need\n * one.\n *\n * This plugin will have PostGraphile use `GraphQLFloat` instead of `BigFloat`\n * for *all* DECIMAL / NUMERIC values, for making PostGraphile v4 slightly more\n * backwards-compatible with v3.\n *\n * It\'s generally a bad idea to use floating point numbers to represent\n * arbitrary precision numbers such as NUMERIC because loss of precision can\n * occur.\n */\nmodule.exports = function PgNumericToFloatPlugin(builder) {\n  builder.hook("init", (_init, build) => {\n    // Register a type handler for NUMERIC / DECIMAL (oid = 1700), always\n    // returning the GraphQLFloat type\n    build.pgRegisterGqlTypeByTypeId("1700", () => build.graphql.GraphQLFloat);\n    return _init;\n  });\n};\n',exampleLanguage:"javascript",result:"",resultLanguage:""},{title:"PgSmallNumericToFloatPlugin",example:'/**\n * This plugin will have PostGraphile use `GraphQLFloat` instead of `BigFloat`\n * for DECIMAL / NUMERIC values that have a precision and scale under the given\n * limits (currently 12 and 2 respectively).\n *\n * It\'s generally a bad idea to use floating point numbers to represent\n * arbitrary precision numbers such as NUMERIC because loss of precision can\n * occur; however some systems are okay with this compromise.\n */\nmodule.exports = function PgSmallNumericToFloatPlugin(\n  builder,\n  { pgNumericToFloatPrecisionCap = 12, pgNumericToFloatScaleCap = 2 }\n) {\n  builder.hook("init", (_init, build) => {\n    // Register a type handler for NUMERIC / DECIMAL (oid = 1700)\n    build.pgRegisterGqlTypeByTypeId("1700", (_set, modifier) => {\n      if (modifier && typeof modifier === "number" && modifier > 0) {\n        // Ref: https://stackoverflow.com/a/3351120/141284\n        const precision = ((modifier - 4) >> 16) & 65535;\n        const scale = (modifier - 4) & 65535;\n        if (\n          precision <= pgNumericToFloatPrecisionCap &&\n          scale <= pgNumericToFloatScaleCap\n        ) {\n          // This number is no more precise than our cap, so we\'re declaring\n          // that we can handle it as a float:\n          return build.graphql.GraphQLFloat;\n        }\n      }\n      // If all else fails, let PostGraphile do it\'s default handling - i.e.\n      // BigFloat\n      return null;\n    });\n\n    // We didn\'t modify _init, but we still must return it.\n    return _init;\n  });\n};\n',exampleLanguage:"javascript",result:"",resultLanguage:""}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [2] >>> JSON",title:"Basic",examples:[{title:"Forums",example:"{\n  allForums {\n    nodes {\n      nodeId\n      id\n      slug\n      name\n      description\n    }\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "slug": "cat-life",\n        "name": "Cat Life",\n        "description":\n          "A forum all about cats and how fluffy they are and how they completely ignore their owners unless there is food. Or yarn."\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "slug": "dog-life",\n        "name": "Dog Life",\n        "description": ""\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDNd",\n        "id": 3,\n        "slug": "slug-life",\n        "name": "Slug Life",\n        "description": ""\n      }\n    ]\n  }\n}\n',resultLanguage:"json"},{title:"Forum by slug",example:'{\n  forumBySlug(slug: "slug-life") {\n    nodeId\n    id\n    slug\n    name\n    description\n  }\n}\n',exampleLanguage:"graphql",result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDNd",\n    "id": 3,\n    "slug": "slug-life",\n    "name": "Slug Life",\n    "description": ""\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [3] >>> JSON",title:"Collections",examples:[{title:"First offset",example:"{\n  allForums(first: 1, offset: 1) {\n    nodes {\n      nodeId\n      id\n      name\n    }\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "name": "Dog Life"\n      }\n    ]\n  }\n}\n',resultLanguage:"json"},{title:"Relation condition",example:'{\n  forumBySlug(slug: "cat-life") {\n    nodeId\n    id\n    name\n    topics(\n      condition: { authorId: 1 }\n    ) {\n      nodes {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}\n',exampleLanguage:"graphql",result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDFd",\n    "id": 1,\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDFd",\n          "id": 1,\n          "title": "cats cats cats"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDJd",\n          "id": 2,\n          "title": "snooze life"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDNd",\n          "id": 3,\n          "title": "too hot"\n        }\n      ]\n    }\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [4] >>> JSON",title:"Relations",examples:[{title:"Forums topics posts",example:"{\n  forumById(id: 1) {\n    name\n    topics(\n      first: 1\n      orderBy: [CREATED_AT_ASC]\n    ) {\n      nodes {\n        id\n        title\n        bodySummary\n        author {\n          id\n          username\n        }\n        posts(\n          first: 1\n          orderBy: [ID_DESC]\n        ) {\n          nodes {\n            id\n            author {\n              id\n              username\n            }\n            body\n          }\n        }\n      }\n    }\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "forumById": {\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "id": 1,\n          "title": "cats cats cats",\n          "bodySummary":\n            "lets discuss cats because t...",\n          "author": {\n            "id": 1,\n            "username": "user"\n          },\n          "posts": {\n            "nodes": [\n              {\n                "id": 3,\n                "author": {\n                  "id": 1,\n                  "username": "user"\n                },\n                "body":\n                  "I love it when they completely ignore you until they want something. So much better than dogs am I rite?"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [5] >>> JSON",title:"Mutations",examples:[{title:"Create",example:'mutation {\n  createTopic(\n    input: {\n      topic: {\n        forumId: 1\n        title: "My question relates to mutations..."\n        body: "How do you write them?"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      forumId\n      title\n      body\n    }\n  }\n}\n',exampleLanguage:"graphql",result:'{\n  "createTopic": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDRd",\n      "id": 4,\n      "forumId": 1,\n      "title":\n        "My question relates to mutations...",\n      "body": "How do you write them?"\n    }\n  }\n}\n',resultLanguage:"json"},{title:"Update",example:"mutation {\n  updateTopicById(\n    input: {\n      id: 1\n      topicPatch: {\n        title: \"My (edited) title\"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      title\n      body\n    }\n  }\n}\n\n# Works for a table like:\n#\n#   create table app_public.topics (\n#     id serial primary key,\n#     forum_id integer NOT NULL references app_public.forums on delete cascade,\n#     title text NOT NULL,\n#     body text DEFAULT ''::text NOT NULL\n#   );\n",exampleLanguage:"graphql",result:'{\n  "updateTopicById": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDFd",\n      "id": 1,\n      "title": "My (edited) title",\n      "body":\n        "lets discuss cats because theyre totally cool"\n    }\n  }\n}\n',resultLanguage:"json"},{title:"Delete",example:"mutation {\n  deleteTopicById(input: { id: 1 }) {\n    deletedTopicId\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "deleteTopicById": {\n    "deletedTopicId":\n      "WyJ0b3BpY3MiLDFd"\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [6] >>> JSON",title:"Custom queries",examples:[{title:"Single scalar",example:"{\n  randomNumber\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.random_number() returns int\n#  language sql stable\n#  as $$\n#    select 4; -- Chosen by fair dice roll. Guaranteed to be random. XKCD#221\n#  $$;\n#\n",exampleLanguage:"graphql",result:'{ "randomNumber": 4 }\n',resultLanguage:"json"},{title:"Single row",example:"{\n  currentUser {\n    nodeId\n    id\n    username\n  }\n}\n\n# Added to the GraphQL schema via\n# this SQL:\n#\n#   create function current_user()\n#   returns app_public.users\n#   language sql stable\n#   as $$\n#     select users.*\n#     from app_public.users\n#     where id = current_user_id();\n#   $$;\n",exampleLanguage:"graphql",result:'{\n  "currentUser": {\n    "nodeId": "WyJ1c2VycyIsMV0=",\n    "id": 1,\n    "username": "user"\n  }\n}\n',resultLanguage:"json"},{title:"Rows connection",example:"{\n  forumsAboutCats {\n    nodes {\n      nodeId\n      id\n      name\n      slug\n    }\n  }\n}\n\n# Created from SQL like:\n#\n#  create function app_public.forums_about_cats()\n#  returns setof app_public.forums\n#  language sql stable\n#  as $$\n#    select *\n#    from app_public.forums\n#    where slug like 'cat-%';\n#  $$;\n",exampleLanguage:"graphql",result:'{\n  "forumsAboutCats": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "name": "Cat Life",\n        "slug": "cat-life"\n      }\n    ]\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [7] >>> JSON",title:"Custom mutations",examples:[{title:"Forgot password",example:"mutation {\n  forgotPassword(\n    input: {\n      email: \"user@example.com\"\n    }\n  ) {\n    success\n  }\n}\n\n# Generated with SQL like this:\n#\n#  create function forgot_password(email text)\n#  returns boolean\n#  language plpgsql volatile\n#  as $$\n#    ...\n#  $$;\n#\n#  -- Optionally rename the result field:\n#  comment on function\n#    forgot_password(email text)\n#    is '@resultFieldName success';\n",exampleLanguage:"graphql",result:'{\n  "forgotPassword": {\n    "success": true\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [8] >>> JSON",title:"Computed columns",examples:[{title:"Topic summary",example:"{\n  topicById(id: 2) {\n    body\n    bodySummary\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",exampleLanguage:"graphql",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your cat just s..."\n  }\n}\n',resultLanguage:"json"},{title:"Topic summary with arg",example:"{\n  topicById(id: 2) {\n    body\n    bodySummary(maxLength: 20)\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",exampleLanguage:"graphql",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your ..."\n  }\n}\n',resultLanguage:"json"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-node-id-f873a0c47e1ed0f0c4fa.js.map