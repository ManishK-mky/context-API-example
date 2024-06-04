Why Context API??

Suppose, hamare pass k react app hai jisme Component A k andar component B render ho rha hai , component B k andar component C render ho rha hai aur Coomponent C k andar component D render ho rha hai
 like  component A --->
                       |
                    component B --->
                                   |
                                component C --->
                                               |
                                            component D

Now , suppose hamare component A me ek state hai "[count , setCount]" karke aur iss state ko humko component B agar use karna hoga toh hum isko props k through pass karenge aur similarly agar humk uss state ko component D mein use karna hai toh props k through hi pass karke lekin ------> lekin isase ek problem hoga jisko ------> {PROP DRILLING} khte hai

isi se bachane k liye Context API ka use kiya jta hai

Humlog ek context API banate hai jisme woh sab states , functionality rakhte hai jisko sab components mein render karne hai aur uss context API ko pure components mein ya app k upaar wrap kar dete hai taki jis component ko bhi woh state , functionality use karna ho woh kar sake.