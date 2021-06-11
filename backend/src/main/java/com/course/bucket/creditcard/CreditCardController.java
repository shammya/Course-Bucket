package com.course.bucket.creditcard;


	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RestController;


	@RestController
	public class CreditCardController {
		
		@PostMapping("/add-creditCard-by-email/{email}")
		public void addCreditCard(@PathVariable String email ,@RequestBody CreditCard creditCard) {
			CreditCard.insertCreditCard(email,creditCard.getCardNo(),creditCard.getNameOnCard(),creditCard.getExpireDate());
		}
		
//		@GetMapping("/get-creditCards")
//		public List<CreditCard> findCreditCards(){
//			
//		}
		
		@GetMapping("/get-creditCard-by-email/{email}")
		public CreditCard findByEmail(@PathVariable String email) {
			return new CreditCard(email);
		}
			
		
		@PutMapping("/update-creditCard-by-email/{email}")
		public void updateCreditCard(@PathVariable String email,@RequestBody CreditCard newCard) {
			CreditCard.changeCreditCard(email, newCard);
		}
		
		@DeleteMapping("/delete-creditCard-by-email/{email}")
		public void deleteCreditCard(@PathVariable String email) {
			CreditCard.deleteCard(email);
		}
	
}
