number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint is for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

## Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.


## In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.


## Bai tap

1. Check palindrome cua mot chu, nguoc voi nhau aoa khi nguoc lai van la aoa (car -> rac -> FALSE)
2. Thay the cac khoang trang bang dau - (day la link url-> day-la-link-url)
3. In hoa nhung ky tu dau cua chu (hung bui -> Hung Bui)
4. Cat mot chu thanh cac cum ki tu theo chieu dai cho truoc
   hungbui , 2 -> ["hu","ng","bu","i"]
   ball, 2 -> ["ba","ll"]
   ball, 5 -> ["ball"]
5. Tim so lan xuat hien cua mot tu trong mot chuoi cho truong 
   hung hung hung1 , hung --> 2

# Excersize 02/03/2021

## 1. Ex1: 
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

## 2.Ex2: 

Find intersection of two array
Ex: 
intersection([2, 1], [2, 3]);
// => [2]

## 3.Ex3: 
Union of two array   
union([2], [1, 2]);
// => [2, 1]

## 4.Ex4:
Xor all equal value ()
xor([2, 1], [2, 3]);
// => [1, 3]

## 5.Ex5: 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
```
fearNotLetter("abce") should return "d".
```

# Excersice 06/03/2021

## Tao mot object gio hang o do co cac thuoc tinh nhu
- Ten nguoi mua hang
- Dia chi giao
- Cac mon hang trong gio
- Tong gia tien

### Cac phuong thuc
-   Them mon hang vao gio hang (prodName, quantity, price)
-   Xoa mon hang (prodName)
-   In ra thong tin bill =>
   ProdName ---- ProdPrice x Quantity
   Total ------ Total Amount

```javascript

let cart = {
   items: [
      {
      name: 'Coca',
      quantity: 1,
      unitPrice: 10000,
      },
      {
         name: 'Snack',
         quantity: 2,
         unitPrice: 5000,
      }
   ],

   // METHOD
   addToCart: function (prodName,quantity,price) {
      // xu ly de them vao trong thuoc tinh items
      this.items.push(...)
   }

}

```
Ex: lay gia ten san pham dau tien
```js
cart.items[0].name
```
