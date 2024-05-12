/**
 * Given two arrays of strings a1 and a2 return a sorted array
 *  r in lexicographical order of the strings of
 *  a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
 */

function inArray(a1: string[], a2: string[]): string[] {
        let r:string[] = new Array<string>;
        a2.forEach((element)=>{
            a1.forEach((substringMarked)=>{
                if(element.includes(substringMarked)){
                    r.push(substringMarked);
                    
                }
            });
            
        });

        return Array.from(new Set(r.sort()));
  }

  console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));