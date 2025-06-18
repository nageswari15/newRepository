s='python is fun'
print(s[0])
print(s[-3])
print(s[0:5])
print(s[3:])
print(s[ :5])
print(len(s))
print(s.upper())
print(s.find("fun"))
s.replace("python","java")
print(s.replace("python","java"))

tech="python,java,golag"
print(tech.split(","))
print("_".join(s))

s1="hello"
s2="world"
s3=s1+s2
print(s1)
print(s2)
print(s3)

s1="python"
s2="python"
print(s1 is s2)
print(id(s1))
print(id(s2))

'''slicing'''
a="Pytho is an amazing lenguage!"
part1=a[0:6]
part2=a[13:]
part3=a[7:9]
print(part1)
print(part2)
print(part3)
part1=a[-30:-24]
part2=a[-17:]
part=a[-23:-21]
print(part1)
print(part2)
print(part3)

print("print any message")
message=input()
print("message:"+message)

message=input("Please enetr the some message")
print("Message:"+message)

num=input("Please enetr the some message")
print("Message:"+num)


num1=input("Please enetr the some message")
num2=input("Please enetr the some message")
num3=int(num1)+int(num2)
print("Sum:",num3)

num1=int(input("Please enetr the some message"))
num2=int(input("Please enetr the some message"))
num3=num1+num2
print("Sum:",num3)
