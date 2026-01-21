Feature: Shirt purchase validation
Scenario: Placing an order
Given Login to the application with "standard_user" and "secret_sauce"
Then adding a shirt to Cart
When goint to cart and checking out 
Then entering the "Daszio", "Fernadez" and "600077"
Then Completing the Transaction


