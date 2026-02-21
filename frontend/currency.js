 
          function convertToINR(event){
            console.log(event?.target?.value);
            var usd = Number(event?.target?.value);
            var inrValue = usd*90.17;
            console.log(inrValue);
            document.getElementById("inr").value = inrValue.toFixed(3); 
          }
          function converToUSD(event){
             console.log(event?.target?.value);
             var inr = Number(event?.target?.value);
             var usdValue = inr/90.17;
             console.log(usdValue);
             document.getElementById("usd").value = usdValue.toFixed(3);

          }
    