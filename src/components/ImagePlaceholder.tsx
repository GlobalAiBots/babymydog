/**
 * ImagePlaceholder — renders real photos when available, warm gradient placeholders otherwise.
 * Photos are mapped by image slot ID. Gradients serve as fallback for slots without photos.
 */

/* eslint-disable @next/next/no-img-element */

// Map of image slot IDs to real photo files
const realImages: Record<string, { src: string; alt: string }> = {
  // Homepage hero
  "hero-1": { src: "/images/happy-dog-owner-hugging-golden-retriever.jpg", alt: "Happy dog owner hugging a golden retriever" },
  // Homepage category cards
  "category-beds": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Dog relaxing in a premium gray dog bed" },
  "category-toys": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Golden retriever playing with stuffed toy - best dog toys reviewed by experts" },
  "category-food": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Dog looking at bowl of premium kibble - best dog food reviews and recommendations" },
  "category-gear": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Dog wearing premium red harness and leash - best dog gear and accessories reviewed" },
  "category-gifts": { src: "/images/golden-retriever-puppies-in-red-wagon.jpg", alt: "Adorable golden retriever puppies in a red wagon - best gifts for dog lovers" },
  "category-grooming": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Dog being professionally groomed - best dog grooming tools reviewed" },
  // Homepage breed spotlight
  "breed-featured-1": { src: "/images/golden-retriever-holding-flower-outdoors.jpg", alt: "Golden Retriever holding a flower - America's favorite family dog" },
  // Blog posts
  "blog-1": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Dog eyeing a bowl of kibble - how to choose the right dog food for your breed" },
  "blog-2": { src: "/images/pug-snuggled-in-patterned-dog-bed.jpg", alt: "Signs your dog needs a better bed - pug in comfortable dog bed" },
  "blog-3": { src: "/images/golden-retriever-puppies-in-a-row.jpg", alt: "Five golden retriever puppies - the ultimate new puppy essentials checklist" },
  "blog-4": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Dog grooming at home - save money with the right tools" },
  "blog-5": { src: "/images/golden-retriever-with-stuffed-toy-grass.jpg", alt: "Golden retriever with favorite toy - best indestructible dog toys" },
  // === PRODUCT PAGES — ALL CATEGORIES ===
  // Dog Beds (top + reviews)
  "best-dog-beds-top-0": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Best dog beds 2026 expert reviewed" },
  "best-dog-beds-review-0": { src: "/images/dachshund-in-cozy-blue-dog-bed.jpg", alt: "Dachshund in a cozy blue dog bed - top rated" },
  "best-dog-beds-review-1": { src: "/images/pug-snuggled-in-patterned-dog-bed.jpg", alt: "Pug snuggled in patterned dog bed" },
  "best-dog-beds-review-2": { src: "/images/puppy-sleeping-peacefully-on-round-bed.jpg", alt: "Puppy sleeping on round dog bed" },
  "best-dog-beds-review-3": { src: "/images/hound-dog-resting-on-bed-in-doorway.jpg", alt: "Hound dog resting on bed in doorway" },
  "best-dog-beds-review-4": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Calming donut dog bed - Best Friends by Sheri review" },
  // Dog Food (top + reviews)
  "best-dog-food-top-0": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Best dog food 2026 - husky at feeding time" },
  "best-dog-food-top-1": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Top dog food reviewed" },
  "best-dog-food-top-2": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "Premium dog food reviews" },
  "best-dog-food-review-0": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Chocolate lab ready for dinner" },
  "best-dog-food-review-1": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "German Shepherd catching kibble" },
  "best-dog-food-review-2": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Border collie with premium kibble" },
  "best-dog-food-review-3": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Best dog food reviews" },
  "best-dog-food-review-4": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Premium dog food review" },
  // Dog Toys (top + reviews)
  "best-dog-toys-top-0": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Best dog toys 2026 - golden retriever with toy" },
  "best-dog-toys-top-1": { src: "/images/weimaraner-puppies-sleeping-with-toys.jpg", alt: "Puppies surrounded by colorful toys - best dog toys reviewed" },
  "best-dog-toys-top-2": { src: "/images/golden-retriever-with-stuffed-toy-grass.jpg", alt: "Best dog toys reviewed" },
  "best-dog-toys-review-0": { src: "/images/pug-cuddling-pink-unicorn-plush-toy.jpg", alt: "Pug cuddling a plush unicorn toy - our favorite indestructible dog toys" },
  "best-dog-toys-review-1": { src: "/images/yorkie-running-with-kong-ball-outdoors.jpg", alt: "Yorkie running with Kong ball" },
  "best-dog-toys-review-2": { src: "/images/weimaraner-puppies-sleeping-with-toys.jpg", alt: "Puppies surrounded by colorful toys" },
  "best-dog-toys-review-3": { src: "/images/boston-terrier-laying-with-tennis-ball.jpg", alt: "Interactive puzzle toy for dogs" },
  "best-dog-toys-review-4": { src: "/images/golden-retriever-with-stuffed-toy-grass.jpg", alt: "Plush dog toy review" },
  // Dog Treats (top + reviews)
  "best-dog-treats-top-0": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Best dog treats 2026" },
  "best-dog-treats-top-1": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "Top dog treats reviewed" },
  "best-dog-treats-top-2": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Premium dog treats" },
  "best-dog-treats-review-0": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Milk-Bone MaroSnacks review" },
  "best-dog-treats-review-1": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "Greenies dental treats review" },
  "best-dog-treats-review-2": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Blue Buffalo treats review" },
  "best-dog-treats-review-3": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Training treats review" },
  "best-dog-treats-review-4": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Freeze dried liver treats review" },
  // Dog Grooming (top + reviews)
  "best-dog-grooming-top-0": { src: "/images/poodle-professional-grooming-salon.jpg", alt: "Professional dog grooming - best grooming tools 2026" },
  "best-dog-grooming-top-1": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Top grooming tools reviewed" },
  "best-dog-grooming-top-2": { src: "/images/poodle-professional-grooming-salon.jpg", alt: "Dog grooming reviews" },
  "best-dog-grooming-review-0": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Dog being groomed with professional scissors" },
  "best-dog-grooming-review-1": { src: "/images/poodle-professional-grooming-salon.jpg", alt: "Slicker brush review" },
  "best-dog-grooming-review-2": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Pet clippers review" },
  "best-dog-grooming-review-3": { src: "/images/poodle-professional-grooming-salon.jpg", alt: "Dog shampoo review" },
  "best-dog-grooming-review-4": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Nail grinder review" },
  // Dog Crates (top + reviews)
  "best-dog-crates-top-0": { src: "/images/hound-dog-resting-on-bed-in-doorway.jpg", alt: "Best dog crates 2026" },
  "best-dog-crates-top-1": { src: "/images/dachshund-in-cozy-blue-dog-bed.jpg", alt: "Top dog crates reviewed" },
  "best-dog-crates-top-2": { src: "/images/puppy-sleeping-peacefully-on-round-bed.jpg", alt: "Premium dog crates" },
  "best-dog-crates-review-0": { src: "/images/hound-dog-resting-on-bed-in-doorway.jpg", alt: "MidWest iCrate review" },
  "best-dog-crates-review-1": { src: "/images/dachshund-in-cozy-blue-dog-bed.jpg", alt: "Diggs Revol crate review" },
  "best-dog-crates-review-2": { src: "/images/puppy-sleeping-peacefully-on-round-bed.jpg", alt: "Amazon Basics crate review" },
  "best-dog-crates-review-3": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Petmate Sky Kennel review" },
  "best-dog-crates-review-4": { src: "/images/hound-dog-resting-on-bed-in-doorway.jpg", alt: "Soft dog crate review" },
  // Dog Harnesses (top + reviews)
  "best-dog-harnesses-top-0": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Dog modeling a premium red harness - best dog harnesses 2026" },
  "best-dog-harnesses-top-1": { src: "/images/couple-petting-dog-wearing-harness.jpg", alt: "Top dog harnesses reviewed" },
  "best-dog-harnesses-top-2": { src: "/images/english-springer-spaniel-wearing-harness.jpg", alt: "Dog harness reviews" },
  "best-dog-harnesses-review-0": { src: "/images/couple-petting-dog-wearing-harness.jpg", alt: "Dog wearing a comfortable harness" },
  "best-dog-harnesses-review-1": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Goldendoodle in red harness on a walk" },
  "best-dog-harnesses-review-2": { src: "/images/english-springer-spaniel-wearing-harness.jpg", alt: "Ruffwear harness review" },
  "best-dog-harnesses-review-3": { src: "/images/couple-petting-dog-wearing-harness.jpg", alt: "PetSafe Easy Walk review" },
  "best-dog-harnesses-review-4": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Julius-K9 harness review" },
  // Dog Leashes (top + reviews)
  "best-dog-leashes-top-0": { src: "/images/english-springer-spaniel-holding-leash-field.jpg", alt: "Dog holding its own leash ready for a walk - best dog leashes 2026" },
  "best-dog-leashes-top-1": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Top dog leashes reviewed" },
  "best-dog-leashes-top-2": { src: "/images/english-springer-spaniel-holding-leash-field.jpg", alt: "Dog leash reviews" },
  "best-dog-leashes-review-0": { src: "/images/english-springer-spaniel-holding-leash-field.jpg", alt: "Springer Spaniel with leash in a field" },
  "best-dog-leashes-review-1": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Retractable leash review" },
  "best-dog-leashes-review-2": { src: "/images/english-springer-spaniel-holding-leash-field.jpg", alt: "TUG retractable leash review" },
  "best-dog-leashes-review-3": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Leather leash review" },
  "best-dog-leashes-review-4": { src: "/images/english-springer-spaniel-holding-leash-field.jpg", alt: "Hands-free leash review" },
  // Dog Bowls (top + reviews)
  "best-dog-bowls-top-0": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Best dog bowls 2026" },
  "best-dog-bowls-top-1": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Top dog bowls reviewed" },
  "best-dog-bowls-top-2": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Premium dog bowls" },
  "best-dog-bowls-review-0": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "YETI dog bowl review" },
  "best-dog-bowls-review-1": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Slow feeder bowl review" },
  "best-dog-bowls-review-2": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Water fountain review" },
  "best-dog-bowls-review-3": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Elevated feeder review" },
  "best-dog-bowls-review-4": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Stainless steel bowl review" },
  // Dog Supplements (top + reviews)
  "best-dog-supplements-top-0": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Best dog supplements 2026" },
  "best-dog-supplements-top-1": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Top dog supplements" },
  "best-dog-supplements-top-2": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Dog vitamin reviews" },
  "best-dog-supplements-review-0": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Cosequin joint supplement review" },
  "best-dog-supplements-review-1": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Zesty Paws multivitamin review" },
  "best-dog-supplements-review-2": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "FortiFlora probiotic review" },
  "best-dog-supplements-review-3": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Omega-3 supplement review" },
  "best-dog-supplements-review-4": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Calming chews review" },
  // Dog Cameras (top + reviews)
  "best-dog-cameras-top-0": { src: "/images/happy-dog-owner-hugging-golden-retriever.jpg", alt: "Best dog cameras 2026" },
  "best-dog-cameras-top-1": { src: "/images/two-happy-dogs-goldendoodle-and-black-lab.jpg", alt: "Top pet cameras" },
  "best-dog-cameras-top-2": { src: "/images/golden-retriever-holding-flower-outdoors.jpg", alt: "Pet monitor reviews" },
  "best-dog-cameras-review-0": { src: "/images/happy-dog-owner-hugging-golden-retriever.jpg", alt: "Furbo camera review" },
  "best-dog-cameras-review-1": { src: "/images/two-happy-dogs-goldendoodle-and-black-lab.jpg", alt: "Blink Mini review" },
  "best-dog-cameras-review-2": { src: "/images/golden-retriever-holding-flower-outdoors.jpg", alt: "Wyze Cam review" },
  "best-dog-cameras-review-3": { src: "/images/happy-dog-owner-hugging-golden-retriever.jpg", alt: "Ring Indoor Cam review" },
  "best-dog-cameras-review-4": { src: "/images/two-happy-dogs-goldendoodle-and-black-lab.jpg", alt: "eufy camera review" },
  // Dog GPS Trackers (top + reviews)
  "best-dog-gps-trackers-top-0": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Best dog GPS trackers 2026" },
  "best-dog-gps-trackers-top-1": { src: "/images/australian-cattle-dog-hiking-mountains.jpg", alt: "Top GPS trackers" },
  "best-dog-gps-trackers-top-2": { src: "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg", alt: "Pet tracker reviews" },
  "best-dog-gps-trackers-review-0": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Apple AirTag for dogs review" },
  "best-dog-gps-trackers-review-1": { src: "/images/australian-cattle-dog-hiking-mountains.jpg", alt: "Fi Smart Collar review" },
  "best-dog-gps-trackers-review-2": { src: "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg", alt: "Samsung SmartTag review" },
  "best-dog-gps-trackers-review-3": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Tile Mate review" },
  "best-dog-gps-trackers-review-4": { src: "/images/australian-cattle-dog-hiking-mountains.jpg", alt: "Jiobit GPS review" },
  // Dog Dental (top + reviews)
  "best-dog-dental-top-0": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Best dog dental care 2026" },
  "best-dog-dental-top-1": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Top dental products" },
  "best-dog-dental-top-2": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Dog dental reviews" },
  "best-dog-dental-review-0": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Dentastix review" },
  "best-dog-dental-review-1": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Greenies dental review" },
  "best-dog-dental-review-2": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Enzymatic toothpaste review" },
  "best-dog-dental-review-3": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Dental kit review" },
  "best-dog-dental-review-4": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "Water additive review" },
  // Dog Coats (top + reviews)
  "best-dog-coats-top-0": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Dog wearing winter coat and boots - best dog coats 2026" },
  "best-dog-coats-top-1": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Top dog coats" },
  "best-dog-coats-top-2": { src: "/images/fluffy-pomeranian-walking-in-booties.jpg", alt: "Dog jacket reviews" },
  "best-dog-coats-review-0": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Kurgo Loft jacket review" },
  "best-dog-coats-review-1": { src: "/images/fluffy-pomeranian-walking-in-booties.jpg", alt: "Ruffwear jacket review" },
  "best-dog-coats-review-2": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Canada Pooch coat review" },
  "best-dog-coats-review-3": { src: "/images/fluffy-pomeranian-walking-in-booties.jpg", alt: "Dog raincoat review" },
  "best-dog-coats-review-4": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Fleece vest review" },
  // Puppy Essentials (top + reviews)
  "best-puppy-essentials-top-0": { src: "/images/golden-retriever-puppies-in-a-row.jpg", alt: "New puppy essentials 2026" },
  "best-puppy-essentials-top-1": { src: "/images/golden-retriever-puppies-in-red-wagon.jpg", alt: "Top puppy supplies" },
  "best-puppy-essentials-top-2": { src: "/images/boston-terrier-puppy-blue-eyes-close-up.jpg", alt: "Puppy starter kit" },
  "best-puppy-essentials-review-0": { src: "/images/golden-retriever-puppies-in-a-row.jpg", alt: "Puppy crate review" },
  "best-puppy-essentials-review-1": { src: "/images/golden-retriever-puppies-in-red-wagon.jpg", alt: "Stain remover review" },
  "best-puppy-essentials-review-2": { src: "/images/boston-terrier-puppy-blue-eyes-close-up.jpg", alt: "KONG puppy toy review" },
  "best-puppy-essentials-review-3": { src: "/images/golden-retriever-puppies-in-a-row.jpg", alt: "Puppy pads review" },
  "best-puppy-essentials-review-4": { src: "/images/golden-retriever-puppies-in-red-wagon.jpg", alt: "Puppy food review" },
  // Breed avatars
  "breed-avatar-golden-retriever": { src: "/images/golden-retriever-puppy-portrait-with-collar.jpg", alt: "Golden Retriever puppy - breed guide and product recommendations" },
  "breed-avatar-bulldog": { src: "/images/english-bulldog-outdoors-with-frisbee.jpg", alt: "English Bulldog - breed guide from a retired AKC breeder" },
  "breed-avatar-beagle": { src: "/images/two-beagle-puppies-peeking-over-ledge.jpg", alt: "Two beagle puppies - breed guide and care tips" },
  "breed-avatar-german-shepherd": { src: "/images/german-shepherd-portrait-studio-dark.jpg", alt: "German Shepherd - breed guide and product recommendations" },
  "breed-avatar-labrador-retriever": { src: "/images/black-labrador-retriever-sitting-on-bridge.jpg", alt: "Labrador Retriever - breed guide and care tips" },
  "breed-avatar-australian-shepherd": { src: "/images/australian-shepherd-blue-eyes-smiling.jpg", alt: "Australian Shepherd with blue eyes - breed guide" },
  "breed-avatar-pembroke-welsh-corgi": { src: "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg", alt: "Pembroke Welsh Corgi - breed guide and product picks" },
  "breed-avatar-german-shorthaired-pointer": { src: "/images/german-shorthaired-pointer-resting-on-bed.jpg", alt: "German Shorthaired Pointer - breed guide" },
  "breed-avatar-dachshund": { src: "/images/dachshund-puppy-jumping-mid-air.jpg", alt: "Dachshund puppy jumping through grass - breed guide" },
  "breed-avatar-rottweiler": { src: "/images/rottweiler-smiling-happy-outdoors.jpg", alt: "Rottweiler - breed guide and product recommendations" },
  "breed-avatar-french-bulldog": { src: "/images/french-bulldog-looking-up-big-eyes.jpg", alt: "French Bulldog - breed guide and care tips" },
  "breed-avatar-poodle": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Poodle in winter coat and boots - breed guide" },
  "breed-avatar-english-springer-spaniel": { src: "/images/english-springer-spaniel-wearing-harness.jpg", alt: "English Springer Spaniel - breed guide and product recommendations" },
  "breed-avatar-havanese": { src: "/images/havanese-dog-in-red-harness-outdoors.jpg", alt: "Havanese dog - breed guide and care tips" },
  "breed-avatar-boston-terrier": { src: "/images/boston-terrier-portrait-sitting-indoors.jpg", alt: "Boston Terrier - breed guide and product picks" },
  "breed-avatar-pomeranian": { src: "/images/pomeranian-sitting-on-gray-armchair.jpg", alt: "Pomeranian - breed guide and grooming tips" },
  "breed-avatar-bernese-mountain-dog": { src: "/images/bernese-mountain-dog-standing-in-autumn-leaves.jpg", alt: "Bernese Mountain Dog - breed guide and care recommendations" },
  "breed-avatar-siberian-husky": { src: "/images/siberian-husky-blue-eyes-on-deck.jpg", alt: "Siberian Husky with blue eyes - breed guide and product picks" },
  "breed-avatar-shih-tzu": { src: "/images/shih-tzu-laying-in-green-grass.jpg", alt: "Shih Tzu relaxing in the grass - breed guide and grooming tips" },
  "breed-avatar-great-dane": { src: "/images/great-dane-merle-portrait-autumn.jpg", alt: "Great Dane - breed guide and large dog product recommendations" },
  "breed-avatar-cane-corso": { src: "/images/cane-corso-blue-standing-in-garden.jpg", alt: "Cane Corso - breed guide and care tips for this powerful breed" },
  "breed-avatar-miniature-schnauzer": { src: "/images/miniature-schnauzer-with-harness-smiling.jpg", alt: "Miniature Schnauzer smiling - breed guide and grooming recommendations" },
  "breed-avatar-boxer": { src: "/images/boxer-dog-close-up-face-portrait.jpg", alt: "Boxer dog - breed guide and product picks for active dogs" },
  "breed-avatar-doberman-pinscher": { src: "/images/doberman-pinscher-brown-portrait-chain.jpg", alt: "Doberman Pinscher - breed guide and training product recommendations" },
  "breed-avatar-cavalier-king-charles-spaniel": { src: "/images/cavalier-king-charles-spaniel-on-white-bed.jpg", alt: "Cavalier King Charles Spaniel - breed guide and care tips" },
  "breed-avatar-yorkshire-terrier": { src: "/images/yorkshire-terrier-portrait-brick-patio.jpg", alt: "Yorkshire Terrier - breed guide" },
  "breed-avatar-border-collie": { src: "/images/border-collie-red-eating-kibble.jpg", alt: "Border Collie - breed guide" },
  "breed-avatar-goldendoodle": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Goldendoodle - breed guide" },
  "breed-avatar-labradoodle": { src: "/images/labradoodle-apricot-curly-in-bed.jpg", alt: "Labradoodle - breed guide" },
  "breed-avatar-maltese": { src: "/images/scruffy-terrier-smiling-purple-flowers.jpg", alt: "Maltese - breed guide" },
  "breed-avatar-pug": { src: "/images/black-pug-wearing-yellow-beanie.jpg", alt: "Pug - breed guide" },
  "breed-avatar-weimaraner": { src: "/images/weimaraner-puppies-sleeping-with-toys.jpg", alt: "Weimaraner - breed guide" },
  "breed-avatar-bichon-frise": { src: "/images/bichon-frise-waving-paw-blue-collar.jpg", alt: "Bichon Frise - breed guide" },
  "breed-avatar-pit-bull-terrier": { src: "/images/pit-bull-terrier-jumping-for-ball.jpg", alt: "Pit Bull Terrier - breed guide" },
  "breed-avatar-australian-cattle-dog": { src: "/images/australian-cattle-dog-hiking-mountains.jpg", alt: "Australian Cattle Dog - breed guide" },
  // Breed hero images
  "breed-german-shepherd-hero": { src: "/images/german-shepherd-sitting-autumn-forest-path.jpg", alt: "German Shepherd sitting on autumn forest path - complete breed guide" },
  "breed-labrador-retriever-hero": { src: "/images/black-labrador-retriever-portrait-close-up.jpg", alt: "Black Labrador Retriever - complete breed guide" },
  "breed-australian-shepherd-hero": { src: "/images/australian-shepherd-blue-eyes-smiling.jpg", alt: "Australian Shepherd - complete breed guide" },
  "breed-pembroke-welsh-corgi-hero": { src: "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg", alt: "Pembroke Welsh Corgi - complete breed guide" },
  "breed-german-shorthaired-pointer-hero": { src: "/images/german-shorthaired-pointer-resting-on-bed.jpg", alt: "German Shorthaired Pointer - complete breed guide" },
  "breed-dachshund-hero": { src: "/images/dachshund-puppy-jumping-mid-air.jpg", alt: "Dachshund - complete breed guide" },
  "breed-rottweiler-hero": { src: "/images/rottweiler-smiling-happy-outdoors.jpg", alt: "Rottweiler - complete breed guide" },
  "breed-french-bulldog-hero": { src: "/images/fawn-french-bulldog-studio-portrait.jpg", alt: "French Bulldog studio portrait - complete breed guide" },
  "breed-poodle-hero": { src: "/images/black-poodle-sitting-on-bed-elegant.jpg", alt: "Elegant black Poodle - complete breed guide and grooming tips" },
  "breed-english-springer-spaniel-hero": { src: "/images/english-springer-spaniel-playing-in-water.jpg", alt: "English Springer Spaniel playing in water - complete breed guide" },
  "breed-havanese-hero": { src: "/images/havanese-dog-in-red-harness-outdoors.jpg", alt: "Havanese - complete breed guide" },
  "breed-boston-terrier-hero": { src: "/images/boston-terrier-portrait-warm-indoors.jpg", alt: "Boston Terrier portrait - complete breed guide" },
  "breed-pomeranian-hero": { src: "/images/cream-pomeranian-smiling-on-steps-leash.jpg", alt: "Pomeranian smiling on steps - complete breed guide" },
  "breed-bernese-mountain-dog-hero": { src: "/images/bernese-mountain-dog-standing-in-autumn-leaves.jpg", alt: "Bernese Mountain Dog - complete breed guide" },
  "breed-siberian-husky-hero": { src: "/images/siberian-husky-blue-eyes-on-deck.jpg", alt: "Siberian Husky - complete breed guide" },
  "breed-shih-tzu-hero": { src: "/images/shih-tzu-laying-in-green-grass.jpg", alt: "Shih Tzu - complete breed guide" },
  "breed-great-dane-hero": { src: "/images/great-dane-merle-portrait-autumn.jpg", alt: "Great Dane - complete breed guide" },
  "breed-cane-corso-hero": { src: "/images/cane-corso-blue-standing-in-garden.jpg", alt: "Cane Corso - complete breed guide" },
  "breed-miniature-schnauzer-hero": { src: "/images/miniature-schnauzer-with-harness-smiling.jpg", alt: "Miniature Schnauzer - complete breed guide" },
  "breed-boxer-hero": { src: "/images/boxer-dog-close-up-face-portrait.jpg", alt: "Boxer - complete breed guide" },
  "breed-doberman-pinscher-hero": { src: "/images/doberman-pinscher-brown-portrait-chain.jpg", alt: "Doberman Pinscher - complete breed guide" },
  "breed-cavalier-king-charles-spaniel-hero": { src: "/images/cavalier-king-charles-spaniel-on-white-bed.jpg", alt: "Cavalier King Charles Spaniel - complete breed guide" },
  "breed-golden-retriever-hero": { src: "/images/golden-retriever-puppy-portrait-with-collar.jpg", alt: "Golden Retriever - complete breed guide" },
  "breed-beagle-hero": { src: "/images/two-beagle-puppies-peeking-over-ledge.jpg", alt: "Beagle - complete breed guide" },
  "breed-yorkshire-terrier-hero": { src: "/images/yorkshire-terrier-portrait-brick-patio.jpg", alt: "Yorkshire Terrier - complete breed guide" },
  "breed-border-collie-hero": { src: "/images/border-collie-red-eating-kibble.jpg", alt: "Border Collie - complete breed guide" },
  "breed-goldendoodle-hero": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Goldendoodle - complete breed guide" },
  "breed-labradoodle-hero": { src: "/images/labradoodle-apricot-curly-in-bed.jpg", alt: "Labradoodle - complete breed guide" },
  "breed-maltese-hero": { src: "/images/scruffy-terrier-smiling-purple-flowers.jpg", alt: "Maltese - complete breed guide" },
  "breed-pug-hero": { src: "/images/black-pug-wearing-yellow-beanie.jpg", alt: "Pug - complete breed guide" },
  "breed-weimaraner-hero": { src: "/images/weimaraner-puppies-sleeping-with-toys.jpg", alt: "Weimaraner - complete breed guide" },
  "breed-bichon-frise-hero": { src: "/images/bichon-frise-waving-paw-blue-collar.jpg", alt: "Bichon Frise - complete breed guide" },
  "breed-pit-bull-terrier-hero": { src: "/images/pit-bull-terrier-jumping-for-ball.jpg", alt: "Pit Bull Terrier - complete breed guide" },
  "breed-australian-cattle-dog-hero": { src: "/images/australian-cattle-dog-hiking-mountains.jpg", alt: "Australian Cattle Dog - complete breed guide" },
  // Bulldog breed page
  "breed-bulldog-hero": { src: "/images/english-bulldog-whiskey-brindle.jpg", alt: "Beautiful brindle English Bulldog - breed guide and care tips" },
  "breed-bulldog-product-1": { src: "/images/english-bulldog-puppy-king-louis.jpg", alt: "English Bulldog puppy King Louis" },
  "breed-bulldog-product-2": { src: "/images/english-bulldog-puppy-bella.png", alt: "English Bulldog puppy Bella" },
  // Blog - bulldog posts
  "blog-bulldog-care": { src: "/images/english-bulldog-laying-down-resting.jpg", alt: "English Bulldog care guide from a retired breeder" },
  "blog-choose-breeder": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Vet examining English Bulldog - how to choose a reputable breeder" },
  // Bulldog breed page health section
  "bulldog-vet-checkup": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "English Bulldog at the veterinarian for regular checkup" },
  // Gift guide heroes
  "gift-dog-lovers-hero": { src: "/images/happy-dog-owner-hugging-golden-retriever.jpg", alt: "Best gifts for dog lovers - curated gift guide" },
  "gift-new-puppy-hero": { src: "/images/golden-retriever-puppies-in-a-row.jpg", alt: "New puppy gift guide - everything you need" },
  "gift-dog-mom-hero": { src: "/images/woman-kissing-golden-retriever-outdoors.jpg", alt: "Best gifts for dog moms" },
  "gift-dog-dad-hero": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Best gifts for dog dads" },
  "gift-dog-christmas-hero": { src: "/images/dog-with-christmas-plush-toy-holiday.jpg", alt: "Happy dog with Christmas plush toy and holiday socks - best dog Christmas gifts" },
  "gift-christmas-hero": { src: "/images/dog-with-christmas-plush-toy-holiday.jpg", alt: "Happy dog with Christmas plush toy and holiday socks - best dog Christmas gifts" },
  // About / lifestyle
  "about-hero": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Woman adventuring with her dog on ocean cliffs - BabyMyDog helps you find the best for your pup" },
  // Newsletter
  "newsletter": { src: "/images/cute-black-dog-holding-thank-you-card.jpg", alt: "Sweet dog saying thank you - join the BabyMyDog pack for weekly picks" },
  // === NEW BREED PHOTOS — 15 remaining breeds ===
  // Shetland Sheepdog
  "breed-avatar-shetland-sheepdog": { src: "/images/shetland-sheepdog-smiling-outdoors.jpg", alt: "Shetland Sheepdog - breed guide and care tips" },
  "breed-shetland-sheepdog-hero": { src: "/images/shetland-sheepdog-smiling-outdoors.jpg", alt: "Shetland Sheepdog - complete breed guide" },
  // Brittany
  "breed-avatar-brittany": { src: "/images/brittany-spaniel-snow-portrait.jpg", alt: "Brittany Spaniel - breed guide and care tips" },
  "breed-brittany-hero": { src: "/images/brittany-spaniel-snow-portrait.jpg", alt: "Brittany - complete breed guide" },
  // Cocker Spaniel
  "breed-avatar-cocker-spaniel": { src: "/images/cocker-spaniel-puppy-golden.jpg", alt: "Cocker Spaniel - breed guide and grooming tips" },
  "breed-cocker-spaniel-hero": { src: "/images/cocker-spaniel-puppy-golden.jpg", alt: "Cocker Spaniel - complete breed guide" },
  // Vizsla
  "breed-avatar-vizsla": { src: "/images/vizsla-running-in-tall-grass.jpg", alt: "Vizsla - breed guide and care tips" },
  "breed-vizsla-hero": { src: "/images/vizsla-running-in-tall-grass.jpg", alt: "Vizsla - complete breed guide" },
  // Chihuahua
  "breed-avatar-chihuahua": { src: "/images/chihuahua-fawn-white-portrait.jpg", alt: "Chihuahua - breed guide and care tips" },
  "breed-chihuahua-hero": { src: "/images/chihuahua-fawn-white-portrait.jpg", alt: "Chihuahua - complete breed guide" },
  // Rhodesian Ridgeback
  "breed-avatar-rhodesian-ridgeback": { src: "/images/rhodesian-ridgeback-sunset-portrait.jpg", alt: "Rhodesian Ridgeback - breed guide and care tips" },
  "breed-rhodesian-ridgeback-hero": { src: "/images/rhodesian-ridgeback-sunset-portrait.jpg", alt: "Rhodesian Ridgeback - complete breed guide" },
  // Belgian Malinois
  "breed-avatar-belgian-malinois": { src: "/images/belgian-malinois-sitting-proud.jpg", alt: "Belgian Malinois - breed guide and training tips" },
  "breed-belgian-malinois-hero": { src: "/images/belgian-malinois-sitting-proud.jpg", alt: "Belgian Malinois - complete breed guide" },
  // Newfoundland
  "breed-avatar-newfoundland": { src: "/images/newfoundland-sunflower-field.jpg", alt: "Newfoundland - breed guide and care tips" },
  "breed-newfoundland-hero": { src: "/images/newfoundland-sunflower-field.jpg", alt: "Newfoundland - complete breed guide" },
  // West Highland White Terrier
  "breed-avatar-west-highland-white-terrier": { src: "/images/west-highland-white-terrier-red-collar.jpg", alt: "West Highland White Terrier - breed guide and grooming tips" },
  "breed-west-highland-white-terrier-hero": { src: "/images/west-highland-white-terrier-red-collar.jpg", alt: "West Highland White Terrier - complete breed guide" },
  // Akita
  "breed-avatar-akita": { src: "/images/akita-sitting-in-grass-garden.jpg", alt: "Akita - breed guide and care tips" },
  "breed-akita-hero": { src: "/images/akita-sitting-in-grass-garden.jpg", alt: "Akita - complete breed guide" },
  // Basset Hound
  "breed-avatar-basset-hound": { src: "/images/basset-hound-portrait-long-ears.jpg", alt: "Basset Hound - breed guide and care tips" },
  "breed-basset-hound-hero": { src: "/images/basset-hound-portrait-long-ears.jpg", alt: "Basset Hound - complete breed guide" },
  // Irish Setter
  "breed-avatar-irish-setter": { src: "/images/irish-setter-standing-tall-grass.jpg", alt: "Irish Setter - breed guide and care tips" },
  "breed-irish-setter-hero": { src: "/images/irish-setter-standing-tall-grass.jpg", alt: "Irish Setter - complete breed guide" },
  // Dalmatian
  "breed-avatar-dalmatian": { src: "/images/dalmatian-running-autumn-field.jpg", alt: "Dalmatian - breed guide and exercise tips" },
  "breed-dalmatian-hero": { src: "/images/dalmatian-running-autumn-field.jpg", alt: "Dalmatian - complete breed guide" },
  // Samoyed
  "breed-avatar-samoyed": { src: "/images/samoyed-white-yellow-flowers.jpg", alt: "Samoyed - breed guide and grooming tips" },
  "breed-samoyed-hero": { src: "/images/samoyed-white-yellow-flowers.jpg", alt: "Samoyed - complete breed guide" },
  // Alaskan Malamute
  "breed-avatar-alaskan-malamute": { src: "/images/alaskan-malamute-black-white-snow.jpg", alt: "Alaskan Malamute - breed guide and care tips" },
  "breed-alaskan-malamute-hero": { src: "/images/alaskan-malamute-black-white-snow.jpg", alt: "Alaskan Malamute - complete breed guide" },
};

function getGradient(id: string): string {
  if (id.startsWith("hero")) return "linear-gradient(135deg, #C4704B 0%, #D4C5A9 40%, #E8D5C4 100%)";
  if (id.startsWith("breed-avatar")) return "linear-gradient(135deg, #D4A574 0%, #C49A6C 50%, #B8876A 100%)";
  if (id.startsWith("breed")) return "linear-gradient(135deg, #C8A882 0%, #B8956A 40%, #A88254 100%)";
  if (id.startsWith("product") || id.startsWith("best")) return "linear-gradient(135deg, #F0EEEB 0%, #E8D5C4 50%, #D4C5A9 100%)";
  if (id.startsWith("category")) return "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)";
  if (id.startsWith("blog")) return "linear-gradient(135deg, #5B7B5E44 0%, #D4C5A9 40%, #FAF8F5 100%)";
  if (id.startsWith("gift")) return "linear-gradient(135deg, #C4704B22 0%, #F0C75E33 50%, #E8D5C4 100%)";
  return "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)";
}

const pawPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='38' rx='8' ry='10' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='20' cy='26' r='4' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='40' cy='26' r='4' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='16' cy='34' r='3.5' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='44' cy='34' r='3.5' fill='%23000' opacity='0.03'/%3E%3C/svg%3E")`;

interface Props {
  id: string;
  alt: string;
  aspect?: "square" | "landscape" | "portrait" | "wide" | "hero";
  className?: string;
  priority?: boolean;
}

export default function ImagePlaceholder({ id, alt, aspect = "landscape", className = "", priority = false }: Props) {
  const real = realImages[id];
  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    hero: "aspect-[3/2]",
  }[aspect];

  // Real image available
  if (real) {
    return (
      <div
        data-image-id={id}
        className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
      >
        <img
          src={real.src}
          alt={real.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  // Gradient placeholder fallback
  const gradient = getGradient(id);
  return (
    <div
      data-image-id={id}
      className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
      style={{ background: gradient }}
      aria-label={alt}
    >
      <div className="absolute inset-0" style={{ backgroundImage: pawPattern, backgroundSize: '60px 60px' }} />
    </div>
  );
}
