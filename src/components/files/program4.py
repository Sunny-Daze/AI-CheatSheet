print("Truth Tables for Logical operators\n")
print("---------------------------------------")
print("Table for AND\n")
print("---------------------------------------")
for i in range(4):
 if i<2:
  p = 0
 else:
  p = 1
 if i%2==0:
  q= 0
 else:
  q=1

 if p and q:
  print(p," ",q,": True")
 else:
  print(p," ",q,": False")
print("---------------------------------------")
print("\nTable for OR\n")
print("---------------------------------------")
for i in range(4):
 if i<2:
  p = 0
 else:
  p = 1
 if i%2==0:
  q= 0
 else:
  q=1

 if p or q:
  print(p," ",q,": True")
 else:
  print(p," ",q,": False")
print("---------------------------------------")
print("\nTable for NOT")
print("---------------------------------------")
print("\nTable for ~p\n")
for i in range(2):
 if i<1:
  p = 0
 else:
  p = 1
 if p==0 :
  print(p,": True")
 else:
  print(p,": False")
 
print("\nTable for ~q\n")
for i in range(2):
 if i<1:
  q = 1
 else:
  q = 0


 if q==0 :
  print(q,": True")
 else:
  print(q,": False")   
print("---------------------------------------")
print("\nTable for P and Q and R\n")
print("---------------------------------------")
for i in range(8):
 if i<4:
  p = 1
 else:
  p = 0
 if i<2:
  q = 1
 elif i>1 and i<4:
  q=0
 elif i>3 and i<6:
    q=1
 else :
   q = 0 
 if i%2==0:
   r=1
 else:
   r=0    
 if p and q and r:
    print(p," ",q," ",r,": True")
 else:
    print(p," ",q," ",r,": False")
print("---------------------------------------")
print("\nTable for P OR Q OR R\n")
print("---------------------------------------")
for i in range(8):
 if i<4:
  p = 1
 else:
  p = 0
 if i<2:
  q = 1
 elif i>1 and i<4:
  q=0
 elif i>3 and i<6:
    q=1
 else :
   q = 0 
 if i%2==0:
   r=1
 else:
   r=0    
 if p or q or r:
    print(p," ",q," ",r,": True")
 else:
    print(p," ",q," ",r,": False")  
print("---------------------------------------")
print("\nTable for (P AND Q OR R) OR (P OR Q AND R)\n")
print("---------------------------------------")
for i in range(8):
 if i<4:
  p = 1
 else:
  p = 0
 if i<2:
  q = 1
 elif i>1 and i<4:
  q=0
 elif i>3 and i<6:
    q=1
 else :
   q = 0 
 if i%2==0:
   r=1
 else:
   r=0    
 if (p and q or r) or (p or q and r):
    print("(",p,"^",q,"v",r,")","v","(",p,"v",q,"^",r,")",": True")
 else:
    print("(",p,"^",q,"v",r,")","v","(",p,"v",q,"^",r,")",": False") 
print("---------------------------------------")
print("\nTable for (P OR Q AND R) AND (P AND Q OR R)\n")
print("---------------------------------------")
for i in range(8):
 if i<4:
  p = 1
 else:
  p = 0
 if i<2:
  q = 1
 elif i>1 and i<4:
  q=0
 elif i>3 and i<6:
    q=1
 else :
   q = 0 
 if i%2==0:
   r=1
 else:
   r=0    
 if (p or q and r) and (p and q or r):
    print("(",p,"v",q,"^",r,")","^","(",p,"^",q,"v",r,")",": True")
 else:
    print("(",p,"v",q,"^",r,")","^","(",p,"^",q,"v",r,")",": False")
