import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :phx_vue3, PhxVue3Web.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "c8hNEtP1cCZG7Z5T1yrl0acvx1PwrFN09w/8eLJ3CtgvgLTl0hR5SCR8qWDkFOUy",
  server: false

# In test we don't send emails.
config :phx_vue3, PhxVue3.Mailer,
  adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
