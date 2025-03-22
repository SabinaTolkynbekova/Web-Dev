text = input()
char_list = list(text)
left = 0
right = len(char_list) - 1

while left < right:
  char_list[left], char_list[right] = char_list[right], char_list[left]
  left += 1
  right -= 1

reversed_text = ''.join(char_list)
print(reversed_text)