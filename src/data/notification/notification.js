export const notifications = [
  {
    id: 1,
    avatar: {
      src: '',
      size: 'xl'
    },
    children:
      'Announcing the winners of the <strong>The only book awards</strong> decided by you, the readers. Check out the champions and runners-up in all 21 categories now!',
    time: 'Just Now',
    emoji: '📢',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  },
  {
    id: 2,
    avatar: {
      src: '',
      size: 'xl'
    },
    children:
      'Last chance to vote in <strong>The 2018 Falcon Choice Awards</strong>! See what made it to the Final Round and help your favorites take home the win. Voting closes on November 26',
    time: '15m',
    emoji: '🏆',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    unread: true,
    to: '#!'
  }
];

export const activities = [
  {
    id: 1,
    avatar: { emoji: '🔍', size: 'xl' },
    children: `<strong>Anthony Hopkins</strong> Followed <strong>Massachusetts Institute of Technology</strong>`,
    time: 'Just Now',
    to: '#!'
  },
  {
    id: 2,
    avatar: { emoji: '📌', size: 'xl' },
    children: `<strong>Anthony Hopkins</strong> Save a <strong>Life Event</strong>`,
    time: 'Yesterday',
    to: '#!'
  }
];

export const rawNewNotifications = [
  {
    id: 1,
    avatar: {
      src: '',
      size: '2xl'
    },
    children:
      '<strong>Emma Watson</strong> replied to your comment : "Hello world 😍"',
    time: 'Just Now',
    emoji: '💬',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!',
    unread: true
  },

  {
    id: 2,
    avatar: {
      name: 'Albert Brooks',
      size: '2xl'
    },
    children:
      "<strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status",
    time: '9hr',
    emoji: '❤️',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!',
    unread: true
  }
];

export const rawEarlierNotifications = [
  {
    id: 1,
    avatar: {
      src: '',
      size: '2xl'
    },
    children:
      "The forecast today shows a low of 20&#8451; in California. See today's weather.",
    time: '1d',
    emoji: '🌤️',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  },
  {
    id: 2,
    avatar: {
      src: '',
      size: 'xl'
    },
    children:
      '<strong>University of Oxford</strong> created an event : "Causal Inference Hilary 2019"',
    time: '1W',
    emoji: '✌️',
    className:
      'rounded-0 border-x-0 border-300 border-bottom-0 notification-unread',
    to: '#!'
  },
  {
    id: 3,
    avatar: {
      src: '',
      size: 'xl'
    },
    children:
      "<strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund",
    time: '2d',
    emoji: '🙋‍',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  }
];
