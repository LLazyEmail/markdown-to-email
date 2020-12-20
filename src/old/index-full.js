thisSource.forEach(line => {
    const tag = line.slice(0, 2)


    switch(tag) {
      case '#!':
        header = Convert.subject.call(header, line)
        break
      case '![':
        emailBody += Convert.image(line)
        break
    }
  })
