# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
require 'securerandom'

def secure_token
  token_file = Rails.root.join('.secret')
  if File.exist?(token_file)
    # Use the existing token.
    File.read(token_file).chomp
  else
    # Generate a new token and store it in token_file.
    token = SecureRandom.hex(64)
    File.write(token_file, token)
    token
  end
end

Portfolio::Application.config.secret_key_base = secure_token
# Portfolio::Application.config.secret_key_base = '487dc40dbb78f06dea3d3cf1db97f23e3426130615f963ea7d34ecc54884b9f3169572ce411c2e83e8a07a8660795d1d495d792a90690af00aa9c2d60e063792'
