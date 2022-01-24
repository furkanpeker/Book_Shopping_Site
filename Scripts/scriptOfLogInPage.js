function eventy(){
	var realEPosta = "f.pkrfurkan@gmail.com"; 
	var realPasswd = "peker456";
	var ePosta = document.getElementById("ePosta").value;
	var passwd = document.getElementById("passwd").value;
	
	if(ePosta == " " || passwd == " ")
		alert("Lütfen boş alan bırakmayınız!");
	else if(ePosta.indexOf("@") < 0)
		alert("Lütfen geçerli bir mail adresi giriniz!");
	else if(passwd.length < 6)
		alert("Şifre alanı en az 6 karakter olmalıdır!");
	else if(ePosta != realEPosta || passwd != realPasswd)
		alert("Girdiğiniz bilgiler hatalı lütfen tekrar deneyiniz!")
	else
		alert("Giriş yaptınız.")
}
