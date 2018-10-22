# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
import stripe
stripe.api_key = "sk_test_hMWLSdT5grfKEieoHTdj7z99"

# Token is created using Checkout or Elements!
# Get the payment token ID submitted by the form:
token = request.form['stripeToken'] # Using Flask

charge = stripe.Charge.create(
    amount=50000,
    currency='usd',
    description='Pre-Order Charge',
    source=token,
)