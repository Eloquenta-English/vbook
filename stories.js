/**
 * VBook Reader — Story Library
 * Each story: { id, title, description, level, emoji, cover, pages: [{text, narration, image, animation, vocabFocus}] }
 *
 * Level codes: A2 (ages 6-8), B1 (ages 9-12), B2 (ages 13+)
 * Animations: fade, float, zoom, slide-left
 */
window.STORIES = [
  {
    id: 'rusty',
    title: 'Rusty and the Glowing Key',
    description: 'A curious fox finds a magical key that opens a door to a world of wonder.',
    level: 'A2',
    emoji: '🦊',
    cover: 'https://images.unsplash.com/photo-1474511320720-9a2b65c0bb81?w=600&q=70',
    pages: [
      {
        text: 'Once upon a time, in a forest filled with twinkling lights, a little fox named Rusty discovered a glowing key.',
        narration: 'Once upon a time, in a forest filled with twinkling lights, a little fox named Rusty discovered a glowing key.',
        image: 'https://images.unsplash.com/photo-1474511320720-9a2b65c0bb81?w=600&q=70',
        animation: 'fade',
        vocabFocus: ['discover', 'twinkling']
      },
      {
        text: 'The key hummed a gentle song. Rusty wondered what door it could open.',
        narration: 'The key hummed a gentle song. Rusty wondered what door it could open.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=70',
        animation: 'float',
        vocabFocus: ['hummed', 'wondered']
      },
      {
        text: 'Behind the old oak tree, Rusty found a tiny door. He turned the key and stepped into a world of wonder.',
        narration: 'Behind the old oak tree, Rusty found a tiny door. He turned the key and stepped into a world of wonder.',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=70',
        animation: 'zoom',
        vocabFocus: ['stepped', 'wonder']
      },
      {
        text: 'Fireflies danced around him, and friendly sprites waved hello. Rusty knew this was the best day of his life.',
        narration: 'Fireflies danced around him, and friendly sprites waved hello. Rusty knew this was the best day of his life.',
        image: 'https://images.unsplash.com/photo-1530538095376-a4936b35b5f0?w=600&q=70',
        animation: 'slide-left',
        vocabFocus: ['danced', 'friendly']
      }
    ]
  },
  {
    id: 'library',
    title: 'The Moonlit Library',
    description: 'Books whisper secrets at midnight to a brave young reader.',
    level: 'B1',
    emoji: '📚',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=70',
    pages: [
      {
        text: 'Maya had always loved the old library at the end of Maple Street, but she had never been inside after dark.',
        narration: 'Maya had always loved the old library at the end of Maple Street, but she had never been inside after dark.',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=70',
        animation: 'fade',
        vocabFocus: ['loved', 'library']
      },
      {
        text: 'One snowy night, she crept through the heavy doors and found the books were glowing softly in the moonlight.',
        narration: 'One snowy night, she crept through the heavy doors and found the books were glowing softly in the moonlight.',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=70',
        animation: 'float',
        vocabFocus: ['crept', 'glowing']
      },
      {
        text: 'A leather-bound volume opened by itself and whispered a story about a dragon who had lost his fire.',
        narration: 'A leather-bound volume opened by itself and whispered a story about a dragon who had lost his fire.',
        image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=600&q=70',
        animation: 'zoom',
        vocabFocus: ['whispered', 'dragon']
      },
      {
        text: 'Maya read until dawn. When she finally closed the book, she realized she had been given a special gift: she could hear stories forever.',
        narration: 'Maya read until dawn. When she finally closed the book, she realized she had been given a special gift: she could hear stories forever.',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=70',
        animation: 'slide-left',
        vocabFocus: ['realized', 'gift']
      }
    ]
  },
  {
    id: 'wavelength',
    title: 'Captain Wavelength',
    description: 'A signal officer on the first ship to reach a new star.',
    level: 'B2',
    emoji: '🚀',
    cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=70',
    pages: [
      {
        text: 'The Helios dropped out of faster-than-light travel fifty thousand kilometres from a star that no human had ever seen. Captain Wavelength ordered silence on the bridge.',
        narration: 'The Helios dropped out of faster-than-light travel fifty thousand kilometres from a star that no human had ever seen. Captain Wavelength ordered silence on the bridge.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=70',
        animation: 'fade',
        vocabFocus: ['faster-than-light', 'ordered']
      },
      {
        text: '"First contact protocol," she said calmly. "Open a channel on every frequency we have. If anyone is listening, they should hear us say hello."',
        narration: '"First contact protocol," she said calmly. "Open a channel on every frequency we have. If anyone is listening, they should hear us say hello."',
        image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&q=70',
        animation: 'float',
        vocabFocus: ['protocol', 'frequency']
      },
      {
        text: 'For three long minutes, only static filled the speakers. Then, just as the crew began to lose hope, a pattern emerged: three short pulses, three long pulses, three short.',
        narration: 'For three long minutes, only static filled the speakers. Then, just as the crew began to lose hope, a pattern emerged: three short pulses, three long pulses, three short.',
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=70',
        animation: 'zoom',
        vocabFocus: ['emerged', 'pattern']
      },
      {
        text: 'Wavelength smiled. She had come expecting silence. Instead, she had found a neighbour. She tapped her reply on the ancient Morse key, and the universe, at last, began to speak.',
        narration: 'Wavelength smiled. She had come expecting silence. Instead, she had found a neighbour. She tapped her reply on the ancient Morse key, and the universe, at last, began to speak.',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=70',
        animation: 'slide-left',
        vocabFocus: ['neighbour', 'ancient']
      }
    ]
  },
  {
    id: 'sleepy-owl',
    title: 'Lila the Sleepy Owl',
    description: 'A baby owl learns that bedtime can be cozy, not lonely.',
    level: 'A2',
    emoji: '🦉',
    cover: 'https://images.unsplash.com/photo-1551888413-cdfb0a5bbf47?w=600&q=70',
    pages: [
      {
        text: 'High in the old oak tree, Lila the owl watched the moon rise. Everyone else was already asleep.',
        narration: 'High in the old oak tree, Lila the owl watched the moon rise. Everyone else was already asleep.',
        image: 'https://images.unsplash.com/photo-1551888413-cdfb0a5bbf47?w=600&q=70',
        animation: 'fade',
        vocabFocus: ['watched', 'asleep']
      },
      {
        text: 'A tiny breeze whispered, "Close your eyes, little one. The stars will keep you company."',
        narration: 'A tiny breeze whispered, "Close your eyes, little one. The stars will keep you company."',
        image: 'https://images.unsplash.com/photo-1532978879514-6cbfee35c8be?w=600&q=70',
        animation: 'float',
        vocabFocus: ['whispered', 'company']
      },
      {
        text: 'Lila tucked her wings close and smiled. The moon sang her a lullaby.',
        narration: 'Lila tucked her wings close and smiled. The moon sang her a lullaby.',
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=70',
        animation: 'zoom',
        vocabFocus: ['tucked', 'lullaby']
      }
    ]
  },
  {
    id: 'paper-boat',
    title: 'The Brave Little Boat',
    description: 'A paper boat sails across a puddle sea during a rainstorm.',
    level: 'A2',
    emoji: '⛵',
    cover: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&q=70',
    pages: [
      {
        text: 'On a rainy afternoon, a little paper boat named Skip set sail across the biggest puddle in the garden.',
        narration: 'On a rainy afternoon, a little paper boat named Skip set sail across the biggest puddle in the garden.',
        image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&q=70',
        animation: 'slide-left',
        vocabFocus: ['rainy', 'sail']
      },
      {
        text: 'Raindrops tapped like drums. Skip wobbled, but he did not tip over.',
        narration: 'Raindrops tapped like drums. Skip wobbled, but he did not tip over.',
        image: 'https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&q=70',
        animation: 'float',
        vocabFocus: ['tapped', 'wobbled']
      },
      {
        text: 'The sun came out, and Skip drifted into a rainbow. He was the bravest boat on the block.',
        narration: 'The sun came out, and Skip drifted into a rainbow. He was the bravest boat on the block.',
        image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&q=70',
        animation: 'zoom',
        vocabFocus: ['drifted', 'bravest']
      }
    ]
  },
  {
    id: 'hedgehog-snow',
    title: "Pip's First Snowflake",
    description: 'A small hedgehog sees snow for the first time.',
    level: 'A2',
    emoji: '🦔',
    cover: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=70',
    pages: [
      {
        text: 'Pip the hedgehog woke up and sniffed the air. Something cold and sparkly was falling from the sky.',
        narration: 'Pip the hedgehog woke up and sniffed the air. Something cold and sparkly was falling from the sky.',
        image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=70',
        animation: 'fade',
        vocabFocus: ['sniffed', 'sparkly']
      },
      {
        text: '"What is it?" Pip asked a snowflake. The snowflake answered by landing softly on his nose.',
        narration: '"What is it?" Pip asked a snowflake. The snowflake answered by landing softly on his nose.',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=70',
        animation: 'float',
        vocabFocus: ['answered', 'softly']
      },
      {
        text: 'Pip laughed and rolled into a tiny snowball. Winter had never felt so friendly.',
        narration: 'Pip laughed and rolled into a tiny snowball. Winter had never felt so friendly.',
        image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&q=70',
        animation: 'zoom',
        vocabFocus: ['rolled', 'friendly']
      }
    ]
  }
];
