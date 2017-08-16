webpackJsonp([0xc5d391e08eae2000],{"./node_modules/json-loader/index.js!./.cache/json/postgraphile-jwt-guide.json":function(e,s){e.exports={data:{remark:{html:'<blockquote>\n<p>This specification was authored by <a href="https://twitter.com/calebmer">Caleb\nMeredith</a> for use in the PostGraphQL project.\nThe language of the specification is meant to be generally applicable and\nadoptable by any who might want to use it.</p>\n</blockquote>\n<h1 id="postgresql-json-web-token-serialization-specification"><a href="#postgresql-json-web-token-serialization-specification" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PostgreSQL JSON Web Token Serialization Specification</h1>\n<p>This specification aims to define a standard way to serialize <a href="https://jwt.io/">JSON Web Tokens</a> (JWT, <a href="https://tools.ietf.org/html/rfc7519">RFC 7519</a>) to a PostgreSQL database for developers who want to move authentication logic into their PostgreSQL schema.</p>\n<p><a href="https://tools.ietf.org/html/rfc7519#section-2">Terminology</a> from the JSON Web Token specification will be used.</p>\n<p>After a JSON Web Token has been verified and decoded, the resulting claims will be serialized to the PostgreSQL database in two ways:</p>\n<ol>\n<li>\n<p>Using the <code>role</code> claim, the corresponding role will be set in the database using <a href="http://www.postgresql.org/docs/current/static/sql-set-role.html"><code>SET ROLE</code></a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">local</span> role $role<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Where <code>$role</code> is the claim value for the <code>role</code> claim. It is not an error if the <code>role</code> claim is not set.</p>\n</li>\n<li>\n<p>All remaining claims will be set using the <a href="http://www.postgresql.org/docs/current/static/sql-set.html"><code>SET</code></a> command under the <code>jwt.claims</code> namespace. Using:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>$claim_name <span class="token keyword">to</span> $claim_value<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Will be run for every claim including registered claims like <code>iss</code>, <code>sub</code>, and the claim specified 1 (<code>role</code>). <code>$claim_name</code> is the name of the claim and <code>$claim_value</code> is the associated value.</p>\n</li>\n</ol>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>A JSON Web Token with the following claims:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"sub"</span><span class="token operator">:</span> <span class="token string">"postgraphql"</span><span class="token punctuation">,</span>\n  <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>\n  <span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Would result in the following SQL being run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">local</span> role <span class="token keyword">user</span><span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>sub <span class="token keyword">to</span> <span class="token string">\'postgraphql\'</span><span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>role <span class="token keyword">to</span> <span class="token string">\'user\'</span><span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>user_id <span class="token keyword">to</span> <span class="token number">2</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="a-note-on-local"><a href="#a-note-on-local" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Note on <code>local</code></h2>\n<p>Using <code>local</code> for <a href="http://www.postgresql.org/docs/current/static/sql-set.html"><code>SET</code></a> and <a href="http://www.postgresql.org/docs/current/static/sql-set-role.html"><code>SET ROLE</code></a> is not required, however it is recommended. This is so that every transaction block (beginning with <code>BEGIN</code> and ending with <code>COMMIT</code> or <code>ROLLBACK</code>) will have its own local parameters. See the following demonstration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">begin</span><span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>user_id <span class="token keyword">to</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">-- Has access to `jwt.claims.user_id`</span>\n<span class="token keyword">commit</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">-- Does not have access to `jwt.claims.user_id`</span>\n</code></pre>\n      </div>\n<h2 id="retrieving-claims-in-postgresql"><a href="#retrieving-claims-in-postgresql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Retrieving Claims in PostgreSQL</h2>\n<p>In order to retrieve a claim set by the serialization of a JSON Web Token as defined in this spec, either the <code>current_setting</code> function or the <a href="http://www.postgresql.org/docs/current/static/sql-show.html"><code>SHOW</code></a> command may be used like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> current_setting<span class="token punctuation">(</span><span class="token string">\'jwt.claims.user_id\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">-- Or…</span>\n<span class="token keyword">show</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>user_id<span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{path:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-jwt-guide-d0170bbbacd9fa08e70b.js.map