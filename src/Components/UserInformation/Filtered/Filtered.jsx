export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
};
  
export const filterVisitTrainings = (infoArray) => {
  // console.log(infoArray)
  return infoArray.filter(item => item.visitTraining === true);
};
  
export const filterNonVisitTrainings = (infoArray) => {
  return infoArray.filter(item => item.visitTraining === false);
};

export const filterMostPopularTrainings = (infoArray) => {
  if (infoArray.length === 1 && infoArray[0].visitTraining === true) {
    const mostPopular = infoArray[0].kind_training;
    return mostPopular;
  }
    const trainingCounts = {};
    infoArray.forEach(item => {
      if (item.visitTraining === true) {
        const kindTraining = item.kind_training;
        if (kindTraining in trainingCounts) {
          trainingCounts[kindTraining] += 1;
        } else {
          trainingCounts[kindTraining] = 1;
        }
      }
    });
    let maxCount = 0;
    let mostPopularTrainings = [];
    for (const kindTraining in trainingCounts) {
      if (trainingCounts[kindTraining] > maxCount) {
        maxCount = trainingCounts[kindTraining];
        mostPopularTrainings = [kindTraining];
      } else if (trainingCounts[kindTraining] === maxCount) {
        mostPopularTrainings.push(kindTraining);
      }
    }
    return mostPopularTrainings.join(", ");
};

export const countUniqueTrainings = (data) => {
  if (data.length === 0) {
    return null;
  }
  const uniqueTrainings = {};

  data.forEach((item) => {
    if (item.visitTraining) {
      const trainingKey = item.kind_training;

      if (!uniqueTrainings[trainingKey]) {
        uniqueTrainings[trainingKey] = [item];
      } else {
        uniqueTrainings[trainingKey].push(item);
      }
    }
  });

  return uniqueTrainings;
};

export const findClientWithMostVisits = (data) => {
  if (data.length === 0) {
    return null;
  }

  let clientWithMostVisits = null;
  let maxVisits = 0;

  data.forEach((client, index) => {
    const visits = client.info.filter((item) => !item.canceledTraining && item.visitTraining).length;

    if (visits > maxVisits) {
      maxVisits = visits;
      clientWithMostVisits = index;
    }
  });
  console.log(clientWithMostVisits)

  return clientWithMostVisits;
};

export const countUniqueTrainingsSubscription = (data) => {
  // console.log(data)
  // console.log("BAD")
  if (data.length === 0) {
    // console.log("GOOD")
    return null;
  }
  const fiteredData = data.filter(item => item.visitTraining === true && item.idTraining !== "without seasonTickets")
  const uniqueTrainings = {};

  fiteredData.forEach((item) => {
    // console.log(item);
    const trainingKey = item.visitTraining === true ? item.kind_training : '';
    // console.log(trainingKey);

    if (!uniqueTrainings[trainingKey]) {
      uniqueTrainings[trainingKey] = [item];
    } else {
      uniqueTrainings[trainingKey].push(item);
    }
  });

  return uniqueTrainings;
};




