export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
};
  
export const filterVisitTrainings = (infoArray) => {
  // console.log(infoArray)
  return infoArray.filter(item => item.visitTrainee === true);
};
  
export const filterNonVisitTrainings = (infoArray) => {
  return infoArray.filter(item => item.visitTrainee === false);
};

export const filterMostPopularTrainings = (infoArray) => {
  if (infoArray.length === 1 && infoArray[0].visitTrainee === true) {
    const mostPopular = infoArray[0].kind_trainee;
    return mostPopular;
  }
    const trainingCounts = {};
    infoArray.forEach(item => {
      if (item.visitTrainee === true) {
        const kindTrainee = item.kind_trainee;
        if (kindTrainee in trainingCounts) {
          trainingCounts[kindTrainee] += 1;
        } else {
          trainingCounts[kindTrainee] = 1;
        }
      }
    });
    let maxCount = 0;
    let mostPopularTrainings = [];
    for (const kindTrainee in trainingCounts) {
      if (trainingCounts[kindTrainee] > maxCount) {
        maxCount = trainingCounts[kindTrainee];
        mostPopularTrainings = [kindTrainee];
      } else if (trainingCounts[kindTrainee] === maxCount) {
        mostPopularTrainings.push(kindTrainee);
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
    if (item.visitTrainee) {
      const trainingKey = item.kind_trainee;

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
    const visits = client.info.filter((item) => !item.canceledTraining && item.visitTrainee).length;

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
  const fiteredData = data.filter(item => item.visitTrainee === true && item.idTraining !== "without seasonTickets")
  const uniqueTrainings = {};

  fiteredData.forEach((item) => {
    // console.log(item);
    const trainingKey = item.visitTrainee === true ? item.kind_trainee : '';
    // console.log(trainingKey);

    if (!uniqueTrainings[trainingKey]) {
      uniqueTrainings[trainingKey] = [item];
    } else {
      uniqueTrainings[trainingKey].push(item);
    }
  });

  return uniqueTrainings;
};




