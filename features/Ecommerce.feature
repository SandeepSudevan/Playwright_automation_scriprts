Feature: Ecommerce validations
Scenario: Placing the Order
Given a login to Ecommerce application with "w416@ofular.com" and "SANDzio:;33333"
When Add "ZARA COAT 3" to Cart
Then Verify "ZARA COAT 3" is displayed in the Cart
When Enter valid details and Place the Order and verify "w416@ofular.com"
Then Verify order in present in the OrderHistory