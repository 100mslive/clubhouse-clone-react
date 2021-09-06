const getAudioLevel = (speakers, id) => {
  if (speakers[id]) {
    return speakers[id].audioLevel ?? 0;
  } else {
    return 0;
  }
};

export default getAudioLevel;
