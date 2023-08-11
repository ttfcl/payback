function countingType1(){
    const element = document.querySelector('#number1')
    
      num = '50000'  

    
      const each = Math.ceil(num/50);
    let time = 0

    for(let i=0; i<=num; i+=each){
      setTimeout(() => {
        element.innerHTML = i;
      }, 20*time);
      /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
      if(i+each>this.maxNum1){
        setTimeout(() => {
          element.innerHTML = num;
        }, 20*(time+1));
      }
      time++;
    }
    }

    countingType1()   