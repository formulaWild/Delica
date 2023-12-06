function calculate() {
  var kilometers = parseFloat(document.getElementById('kilometers').value);
  var hours = parseFloat(document.getElementById('hours').value);

  // 檢查有沒有低能兒
  if (isNaN(kilometers) || isNaN(hours) || kilometers < 0 || hours < 0) {
    document.getElementById('result').innerHTML = '低能兒';
    document.getElementById('deposit').innerHTML = '你確定要租車?????';
    document.getElementById('depositResult').innerHTML = '輸入大於0的數字啦';
  } else {
    var result;
    var firstpay;
    if (hours >= 108) {
      result = (kilometers * 4.5 + hours * 140 * 0.8).toFixed(0);
      firstpay = (hours * 140 * 0.8).toFixed(0);
    } else if (hours >= 60) {
      result = (kilometers * 4.5 + hours * 140 * 0.9).toFixed(0);
      firstpay = (hours * 140 * 0.9).toFixed(0);
    } else {
      result = (kilometers * 4.5 + hours * 140).toFixed(0);
      firstpay = (hours * 140).toFixed(0);
    }
    

    document.getElementById('result').innerHTML = '預期總金額為： NT$ ' + result;
    var depositAmount = (firstpay * 0.3).toFixed(0); 
    var finalAmount = (firstpay - depositAmount).toFixed(0); 

    document.getElementById('deposit').innerHTML = '訂金： NT$ ' + depositAmount;
    document.getElementById('depositResult').innerHTML = '取車時需先收取(已扣訂金)： NT$ ' + finalAmount + ' <br> (先收取租借時間費用，還車時依照實際行駛距離計費)';
  }
}
