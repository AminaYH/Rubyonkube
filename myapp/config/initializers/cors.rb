Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost.localdomain:3001'  # Replace with your frontend URL
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
  end
end
