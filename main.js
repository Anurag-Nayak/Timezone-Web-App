
        var abc=null;
        function calcTime(offset,element){
            let a=new Date();
            let utc=a.getTime()+(a.getTimezoneOffset()*60000);
            let b=new Date(utc+(3600000*offset));
            document.getElementById(element).innerHTML = "  "+b.toLocaleString();
            //document.getElementById('time1').innerHTML = "  "+b.toLocaleString();
        }
        
        
            function timecall(element2,element)
            {
                
           
                // if(abc!=null)
                // clearInterval();
             abc=setInterval(()=>
                {
                    calcTime(element2,element);
                },1000);
                
            }