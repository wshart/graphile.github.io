webpackJsonp([49645441935291],{446:function(e,n){e.exports={data:{remark:{html:'<h2 id="namespaces-postgresql-schemas"><a href="#namespaces-postgresql-schemas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Namespaces (PostgreSQL "schemas")</h2>\n<p>In PostgreSQL, each database consists of a number of "schemas". The default\nschema is named "public" and many users only ever deal with this one schema.</p>\n<p>In PostGraphile we advise you to use schemas to help organise your\napplication - you can use one schema for the tables that will be exposed to\nGraphQL, another for the tables that should be completely private (e.g. where\nyou store the bcrypted user passwords or other secrets never to be exposed!),\nand you can use other schemas too, whatever makes sense for your application.</p>\n<p>To create a schema in PostgreSQL:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span> app_public<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>To create or reference something in that schema, just prepend the name of the\nthing with the schema name, e.g:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> app_public<span class="token punctuation">.</span>users <span class="token punctuation">(</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> app_public<span class="token punctuation">.</span>best_user<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>\n\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> app_public<span class="token punctuation">.</span>users<span class="token punctuation">;</span>\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> app_public<span class="token punctuation">.</span>best_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="advice"><a href="#advice" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advice</h3>\n<p>Having built quite a few applications on PostGraphile now, I (Benjie) have\nsettled on the following:</p>\n<ul>\n<li><code class="language-text">app_public</code> - tables and functions to be exposed to GraphQL</li>\n<li><code class="language-text">app_hidden</code> - same privileges as <code class="language-text">app_public</code>, but simply not exposed to GraphQL</li>\n<li><code class="language-text">app_private</code> - secrets that require elevated privileges to access</li>\n<li><code class="language-text">app_jobs</code> - where my <a href="https://gist.github.com/benjie/839740697f5a1c46ee8da98a1efac218">job queue</a> lives</li>\n</ul>\n<p>I personally don\'t use the <code class="language-text">public</code> schema for anything other than as the\n<a href="https://www.postgresql.org/docs/10/static/sql-createextension.html">default location that PostgreSQL extensions get\ninstalled</a>.</p>\n<p>Using this pattern is <strong>not required</strong> and in fact you can just use the\ndefault <code class="language-text">public</code> schema if you so chose. By default, PostGraphile will\nautomatically ignore resources installed by extensions, so you don\'t need to\nomit these manually. Other tables and functions can be omitted using the\n<a href="/postgraphile/smart-comments/">smart comments</a> functionality.</p>',frontmatter:{path:"/postgraphile/namespaces/",title:"Namespaces",showExamples:null}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"news",sections:[{id:"main",title:"Archive"},{id:"about",title:"About"}],pages:[{to:"/news/postgraphile-version-4/",title:"Version 4 Announcement",sectionId:"main",subpages:null},{to:"/news/press-kit/",title:"Press Kit",sectionId:"about",subpages:null}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides",subpages:[]},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides",subpages:[]},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides",subpages:[]},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides",subpages:[]},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides",subpages:[]},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference",subpages:[]}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"basics",title:"Operation"},{id:"customising",title:"Customising"},{id:"guides",title:"Guides"},{id:"community",title:"Community"},{id:"faq",title:"FAQ"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview",subpages:[]},{to:"/postgraphile/examples/",title:"EXAMPLES",sectionId:"overview",subpages:[]},{to:"/postgraphile/usage/",title:"Usage",sectionId:"overview",subpages:[{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"overview"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"overview"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"overview"}]},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview",subpages:[]},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview",subpages:[]},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"basics",subpages:[]},{to:"/postgraphile/namespaces/",title:"Namespaces",sectionId:"basics",subpages:null},{to:"/postgraphile/inflection/",title:"Inflection",sectionId:"basics",subpages:null},{to:"/postgraphile/tables/",title:"Tables",sectionId:"basics",subpages:[{to:"/postgraphile/relations/",title:"Relations",sectionId:"basics"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"basics"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"basics"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"basics"},{to:"/postgraphile/node-id/",title:"nodeId / id",sectionId:"basics"}]},{to:"/postgraphile/functions/",title:"Functions",sectionId:"basics",subpages:[{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"basics"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"basics"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"basics"},{to:"/postgraphile/function-restrictions/",title:"Function Restrictions",sectionId:"basics"}]},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"basics",subpages:[]},{to:"/postgraphile/security/",title:"Security",sectionId:"basics",subpages:[]},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"basics",subpages:[]},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"basics",subpages:[]},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"basics",subpages:[]},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"customising",subpages:[]},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"customising",subpages:[{to:"/postgraphile/make-extend-schema-plugin/",title:"makeExtendSchemaPlugin",sectionId:"customising"},{to:"/postgraphile/make-add-inflectors-plugin/",title:"makeAddInflectorsPlugin",sectionId:"customising"},{to:"/postgraphile/extending-raw/",title:"Graphile Engine",sectionId:"customising"},{to:"/postgraphile/plugin-gallery/",title:"Plugin Gallery",sectionId:"customising"}]},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"customising",subpages:[]},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides",subpages:[]},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides",subpages:[]},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"guides",subpages:[]},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides",subpages:[]},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/testing-jest/",title:"Testing with Jest",sectionId:"guides",subpages:[]},{to:"/postgraphile/community-plugins/",title:"Community Plugins",sectionId:"community",subpages:[]},{to:"/postgraphile/community-chat/",title:"Community Chat",sectionId:"community",subpages:[]},{to:"/postgraphile/code-of-conduct/",title:"Code of Conduct",sectionId:"community",subpages:[]},{to:"/postgraphile/introspection/",title:"Introspection?",sectionId:"faq",subpages:[]},{to:"/postgraphile/why-nullable/",title:"Why is it nullable?",sectionId:"faq",subpages:[]}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [3] >>> JSON",name:"graphile-build-pg",sections:[{id:"overview",title:"Usage"}],pages:[{to:"/graphile-build-pg/settings/",title:"Settings",sectionId:"overview",subpages:[]}]}}]},examples:{edges:[{node:{category:"plugins",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [0] >>> JSON",title:"Inflector",examples:[{title:"PgRenamePatchToChangeSetPlugin",example:'/**\n * Simply renames the `UserPatch` and `PostPatch` type names to be called\n * `UserChangeSet` and `PostChangeSet` instead.\n *\n * Not particularly useful, just an example.\n *\n * Replaces this inflector:\n * https://github.com/graphile/graphile-engine/blob/f3fb3878692c6959e481e517375da66503428dc5/packages/graphile-build-pg/src/plugins/PgBasicsPlugin.js#L309-L311\n */\nconst { makeAddInflectorsPlugin } = require("graphile-utils");\n\nmodule.exports = makeAddInflectorsPlugin({\n  patchType(typeName) {\n    // return this.upperCamelCase(`${typeName}-patch`);\n    return this.upperCamelCase(`${typeName}-change-set`);\n  },\n});\n',exampleLanguage:"javascript",result:"",resultLanguage:""},{title:"PgShortenAllRowsInflectorPlugin",example:'/**\n * Simply renames the `allUsers` and `allPosts` Query fields to `users` and\n * `posts` respectively.\n *\n * Not particularly useful, just an example.\n *\n * Replaces this inflector:\n * https://github.com/graphile/graphile-engine/blob/f3fb3878692c6959e481e517375da66503428dc5/packages/graphile-build-pg/src/plugins/PgBasicsPlugin.js#L460-L464\n */\nconst { makeAddInflectorsPlugin } = require("graphile-utils");\n\nmodule.exports = makeAddInflectorsPlugin({\n  allRows(table) {\n    return this.camelCase(\n      // Was: `all-${this.pluralize(this._singularizedTableName(table))}`\n      // Now:\n      this.pluralize(this._singularizedTableName(table))\n    );\n  },\n});\n',exampleLanguage:"javascript",result:"",resultLanguage:""}]}},{node:{category:"plugins",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [1] >>> JSON",title:"Types",examples:[{title:"PgNumericToFloatPlugin",example:'/**\n * Use of this plugin is NOT recommended, please see\n * PgSmallNumericToFloatPlugin for a more appropriate replacement if you need\n * one.\n *\n * This plugin will have PostGraphile use `GraphQLFloat` instead of `BigFloat`\n * for *all* DECIMAL / NUMERIC values, for making PostGraphile v4 slightly more\n * backwards-compatible with v3.\n *\n * It\'s generally a bad idea to use floating point numbers to represent\n * arbitrary precision numbers such as NUMERIC because loss of precision can\n * occur.\n */\nmodule.exports = function PgNumericToFloatPlugin(builder) {\n  builder.hook("init", (_init, build) => {\n    // Register a type handler for NUMERIC / DECIMAL (oid = 1700), always\n    // returning the GraphQLFloat type\n    build.pgRegisterGqlTypeByTypeId("1700", () => build.graphql.GraphQLFloat);\n    return _init;\n  });\n};\n',exampleLanguage:"javascript",result:"",resultLanguage:""},{title:"PgSmallNumericToFloatPlugin",example:'/**\n * This plugin will have PostGraphile use `GraphQLFloat` instead of `BigFloat`\n * for DECIMAL / NUMERIC values that have a precision and scale under the given\n * limits (currently 12 and 2 respectively).\n *\n * It\'s generally a bad idea to use floating point numbers to represent\n * arbitrary precision numbers such as NUMERIC because loss of precision can\n * occur; however some systems are okay with this compromise.\n */\nmodule.exports = function PgSmallNumericToFloatPlugin(\n  builder,\n  { pgNumericToFloatPrecisionCap = 12, pgNumericToFloatScaleCap = 2 }\n) {\n  builder.hook("init", (_init, build) => {\n    // Register a type handler for NUMERIC / DECIMAL (oid = 1700)\n    build.pgRegisterGqlTypeByTypeId("1700", (_set, modifier) => {\n      if (modifier && typeof modifier === "number" && modifier > 0) {\n        // Ref: https://stackoverflow.com/a/3351120/141284\n        const precision = ((modifier - 4) >> 16) & 65535;\n        const scale = (modifier - 4) & 65535;\n        if (\n          precision <= pgNumericToFloatPrecisionCap &&\n          scale <= pgNumericToFloatScaleCap\n        ) {\n          // This number is no more precise than our cap, so we\'re declaring\n          // that we can handle it as a float:\n          return build.graphql.GraphQLFloat;\n        }\n      }\n      // If all else fails, let PostGraphile do it\'s default handling - i.e.\n      // BigFloat\n      return null;\n    });\n\n    // We didn\'t modify _init, but we still must return it.\n    return _init;\n  });\n};\n',exampleLanguage:"javascript",result:"",resultLanguage:""}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [2] >>> JSON",title:"Basic",examples:[{title:"Forums",example:"{\n  allForums {\n    nodes {\n      nodeId\n      id\n      slug\n      name\n      description\n    }\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "slug": "cat-life",\n        "name": "Cat Life",\n        "description":\n          "A forum all about cats and how fluffy they are and how they completely ignore their owners unless there is food. Or yarn."\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "slug": "dog-life",\n        "name": "Dog Life",\n        "description": ""\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDNd",\n        "id": 3,\n        "slug": "slug-life",\n        "name": "Slug Life",\n        "description": ""\n      }\n    ]\n  }\n}\n',resultLanguage:"json"},{title:"Forum by slug",example:'{\n  forumBySlug(slug: "slug-life") {\n    nodeId\n    id\n    slug\n    name\n    description\n  }\n}\n',exampleLanguage:"graphql",result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDNd",\n    "id": 3,\n    "slug": "slug-life",\n    "name": "Slug Life",\n    "description": ""\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [3] >>> JSON",title:"Collections",examples:[{title:"First offset",example:"{\n  allForums(first: 1, offset: 1) {\n    nodes {\n      nodeId\n      id\n      name\n    }\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "name": "Dog Life"\n      }\n    ]\n  }\n}\n',resultLanguage:"json"},{title:"Relation condition",example:'{\n  forumBySlug(slug: "cat-life") {\n    nodeId\n    id\n    name\n    topics(\n      condition: { authorId: 1 }\n    ) {\n      nodes {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}\n',exampleLanguage:"graphql",result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDFd",\n    "id": 1,\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDFd",\n          "id": 1,\n          "title": "cats cats cats"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDJd",\n          "id": 2,\n          "title": "snooze life"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDNd",\n          "id": 3,\n          "title": "too hot"\n        }\n      ]\n    }\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [4] >>> JSON",title:"Relations",examples:[{title:"Forums topics posts",example:"{\n  forumById(id: 1) {\n    name\n    topics(\n      first: 1\n      orderBy: [CREATED_AT_ASC]\n    ) {\n      nodes {\n        id\n        title\n        bodySummary\n        author {\n          id\n          username\n        }\n        posts(\n          first: 1\n          orderBy: [ID_DESC]\n        ) {\n          nodes {\n            id\n            author {\n              id\n              username\n            }\n            body\n          }\n        }\n      }\n    }\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "forumById": {\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "id": 1,\n          "title": "cats cats cats",\n          "bodySummary":\n            "lets discuss cats because t...",\n          "author": {\n            "id": 1,\n            "username": "user"\n          },\n          "posts": {\n            "nodes": [\n              {\n                "id": 3,\n                "author": {\n                  "id": 1,\n                  "username": "user"\n                },\n                "body":\n                  "I love it when they completely ignore you until they want something. So much better than dogs am I rite?"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [5] >>> JSON",title:"Mutations",examples:[{title:"Create",example:'mutation {\n  createTopic(\n    input: {\n      topic: {\n        forumId: 1\n        title: "My question relates to mutations..."\n        body: "How do you write them?"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      forumId\n      title\n      body\n    }\n  }\n}\n',exampleLanguage:"graphql",result:'{\n  "createTopic": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDRd",\n      "id": 4,\n      "forumId": 1,\n      "title":\n        "My question relates to mutations...",\n      "body": "How do you write them?"\n    }\n  }\n}\n',resultLanguage:"json"},{title:"Update",example:"mutation {\n  updateTopicById(\n    input: {\n      id: 1\n      topicPatch: {\n        title: \"My (edited) title\"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      title\n      body\n    }\n  }\n}\n\n# Works for a table like:\n#\n#   create table app_public.topics (\n#     id serial primary key,\n#     forum_id integer NOT NULL references app_public.forums on delete cascade,\n#     title text NOT NULL,\n#     body text DEFAULT ''::text NOT NULL\n#   );\n",exampleLanguage:"graphql",result:'{\n  "updateTopicById": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDFd",\n      "id": 1,\n      "title": "My (edited) title",\n      "body":\n        "lets discuss cats because theyre totally cool"\n    }\n  }\n}\n',resultLanguage:"json"},{title:"Delete",example:"mutation {\n  deleteTopicById(input: { id: 1 }) {\n    deletedTopicId\n  }\n}\n",exampleLanguage:"graphql",result:'{\n  "deleteTopicById": {\n    "deletedTopicId":\n      "WyJ0b3BpY3MiLDFd"\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [6] >>> JSON",title:"Custom queries",examples:[{title:"Single scalar",example:"{\n  randomNumber\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.random_number() returns int\n#  language sql stable\n#  as $$\n#    select 4; -- Chosen by fair dice roll. Guaranteed to be random. XKCD#221\n#  $$;\n#\n",exampleLanguage:"graphql",result:'{ "randomNumber": 4 }\n',resultLanguage:"json"},{title:"Single row",example:"{\n  currentUser {\n    nodeId\n    id\n    username\n  }\n}\n\n# Added to the GraphQL schema via\n# this SQL:\n#\n#   create function current_user()\n#   returns app_public.users\n#   language sql stable\n#   as $$\n#     select users.*\n#     from app_public.users\n#     where id = current_user_id();\n#   $$;\n",exampleLanguage:"graphql",result:'{\n  "currentUser": {\n    "nodeId": "WyJ1c2VycyIsMV0=",\n    "id": 1,\n    "username": "user"\n  }\n}\n',resultLanguage:"json"},{title:"Rows connection",example:"{\n  forumsAboutCats {\n    nodes {\n      nodeId\n      id\n      name\n      slug\n    }\n  }\n}\n\n# Created from SQL like:\n#\n#  create function app_public.forums_about_cats()\n#  returns setof app_public.forums\n#  language sql stable\n#  as $$\n#    select *\n#    from app_public.forums\n#    where slug like 'cat-%';\n#  $$;\n",exampleLanguage:"graphql",result:'{\n  "forumsAboutCats": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "name": "Cat Life",\n        "slug": "cat-life"\n      }\n    ]\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [7] >>> JSON",title:"Custom mutations",examples:[{title:"Forgot password",example:"mutation {\n  forgotPassword(\n    input: {\n      email: \"user@example.com\"\n    }\n  ) {\n    success\n  }\n}\n\n# Generated with SQL like this:\n#\n#  create function forgot_password(email text)\n#  returns boolean\n#  language plpgsql volatile\n#  as $$\n#    ...\n#  $$;\n#\n#  -- Optionally rename the result field:\n#  comment on function\n#    forgot_password(email text)\n#    is '@resultFieldName success';\n",exampleLanguage:"graphql",result:'{\n  "forgotPassword": {\n    "success": true\n  }\n}\n',resultLanguage:"json"}]}},{node:{category:"queries",id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [8] >>> JSON",title:"Computed columns",examples:[{title:"Topic summary",example:"{\n  topicById(id: 2) {\n    body\n    bodySummary\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",exampleLanguage:"graphql",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your cat just s..."\n  }\n}\n',resultLanguage:"json"},{title:"Topic summary with arg",example:"{\n  topicById(id: 2) {\n    body\n    bodySummary(maxLength: 20)\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",exampleLanguage:"graphql",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your ..."\n  }\n}\n',resultLanguage:"json"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-namespaces-e160b98a0d69d29dd11c.js.map