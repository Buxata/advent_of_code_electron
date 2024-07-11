import { open } from "node:fs/promises";

function isCharNumber(c: string): boolean {
  return c >= "0" && c <= "9";
}

(async () => {
  const file = await open("data/input1.txt");
  var total: number = 0;
  for await (const line of file.readLines()) {
    let first_number: number | null = null;
    let last_number: number | null = null;
    for (let i: number = 0; i < line.length; i++) {
      if (isCharNumber(line[i])) {
        first_number = parseInt(line[i]);
      }
    }
    for (let i: number = line.length - 1; i >= 0; i--) {
      if (isCharNumber(line[i])) {
        last_number = parseInt(line[i]);
      }
    }
    if (last_number != null && first_number != null) {
      total += first_number * 10 + last_number;
    } else if (last_number == first_number && first_number != null) {
      total += first_number;
    } else {
      console.log("WTF MAN?!");
    }
  }

  console.log("The total is " + total.toString());
})();
