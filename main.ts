// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests:string[] = ["Juned", "Bilal", "Saif"]

// using loop to print each invitation.
for(let i= 0; i<guests.length;i++){
    console.log(`Dear ${guests[i]},\n you are cordially invited for dinnner. It would be an honor to have you. \n regards.\n Dilawar Ali Baig`)
}
