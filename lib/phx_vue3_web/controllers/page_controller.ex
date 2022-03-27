defmodule PhxVue3Web.PageController do
  use PhxVue3Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
