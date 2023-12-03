document.getElementById('deductionForm').addEventListener('submit', function (event) {
    
    var name = document.getElementById('name').value;
    var StaffNo = document.getElementById('StaffNo').value;
    var kcdio = document.getElementById('kcdio').value;
    var contact= document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
     
    if (name === '' || amount === '' || amount <= 0) {
      alert('Please fill in all fields correctly');
      event.preventDefault(); 
  }else {
       
          document.getElementById('deductionForm').classList.add('hidden');
          
          document.getElementById('thankYouMessage').classList.remove('hidden');
          event.preventDefault(); 
  }
});