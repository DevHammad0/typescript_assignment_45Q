function make_sandwich(items: string[]): void {
    let summary: string = "You ordered a sandwich with ";
    for (let i = 0; i < items.length; i++) {
      summary += items[i];
      // Adding a comma or and if there are more items
      if (i < items.length - 2) {
        summary += ", ";
      } else if (i == items.length - 2) {
        summary += ", and ";
      }
    }
    //adding fullstop at end
    summary += ".";
    console.log(summary);
  }
  
  make_sandwich(["cheese", "ham", "lettuce", "tomato"]);
  make_sandwich(["peanut butter", "jelly"]);
  make_sandwich(["chicken", "catchup", "mayo", "mustard"]);
  