export class FlugService {
    
    find(von, nach) {
        
        return new Promise((resolve, reject) => { 
        
            var url = "/fluege.txt?"
                + "von=" 
                + encodeURIComponent(von) 
                + "nach=" 
                + encodeURIComponent(nach);

        
            var xhReq = new XMLHttpRequest();
        
            xhReq.open("GET", url, true);
        
            xhReq.onreadystatechange = () => {
                if (xhReq.readyState != 4)  { return; }
                
                var text = xhReq.responseText;
                var fluege = JSON.parse(text);
                resolve(fluege);
            }
        
            xhReq.send(null);
        
        
        });
        
    }
    
    
}