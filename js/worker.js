// Worker
// // Gem Count
function gemCount(gemIndex, ascendLevel) {
    let sum = 0;
    if (gemIndex == 0) {
        if (ascendLevel <= 0) {
            sum = 1;
        } else if (ascendLevel > 0) {
            sum = 0;
        }
    } else if (gemIndex == 1) {
        if (ascendLevel <= 1) {
            sum = 9;
        } else if (ascendLevel <= 2) {
            sum = 6;
        } else if (ascendLevel > 2) {
            sum = 0;
        }
    } else if (gemIndex == 2) {
        if (ascendLevel <= 3) {
            sum = 9;
        } else if (ascendLevel <= 4) {
            sum = 6;
        } else if (ascendLevel > 4) {
            sum = 0;
        }
    } else if (gemIndex == 3) {
        if (ascendLevel <= 5) {
            sum = 6;
        } else if (ascendLevel > 5) {
            sum = 0;
        }
    }
    return sum;
}

// // Elite Material Count
function eliteCount(ascendLevel) {
    let sum = 0;
    if (ascendLevel <= 1) {
        sum = 46;
    } else if (ascendLevel == 2) {
        sum = 44;
    } else if (ascendLevel == 3) {
        sum = 40;
    } else if (ascendLevel == 4) {
        sum = 32;
    } else if (ascendLevel == 5) {
        sum = 20;
    } else if (ascendLevel == 6) {
        sum = 0;
    }
    return sum;
}

// // Region Speciality Count
function specCount(ascendLevel) {
    let sum = 0;
    if (ascendLevel == 0) {
        sum = 168;
    } else if (ascendLevel == 1) {
        sum = 165;
    } else if (ascendLevel == 2) {
        sum = 155;
    } else if (ascendLevel == 3) {
        sum = 135;
    } else if (ascendLevel == 4) {
        sum = 105;
    } else if (ascendLevel == 5) {
        sum = 60;
    } else if (ascendLevel == 6) {
        sum = 0;
    }
    return sum;
}

// // Common Material Count
function commCount(commIndex, ascendLevel) {
    let sum = 0;
    if (commIndex == 0) {
        if (ascendLevel <= 0) {
            sum = 18;
        } else if (ascendLevel <= 1) {
            sum = 15;
        } else if (ascendLevel > 1) {
            sum = 0;
        }
    } else if (commIndex == 1) {
        if (ascendLevel <= 2) {
            sum = 30;
        } else if (ascendLevel <= 3) {
            sum = 18;
        } else if (ascendLevel > 3) {
            sum = 0;
        }
    } else if (commIndex == 2) {
        if (ascendLevel <= 4) {
            sum = 36;
        } else if (ascendLevel <= 5) {
            sum = 24;
        } else if (ascendLevel > 5) {
            sum = 0;
        }
    }
    return sum;
}

// // Talent Common Material Count
function talentCommCount(commIndex, talent1Level, talent2Level, talent3Level) {
    let sum = 0;

    if (commIndex == 0) {
        if (talent1Level <= 1) {
            sum += 6;
        } else if (talent1Level > 1) {
            sum += 0;
        }

        if (talent2Level <= 1) {
            sum += 6;
        } else if (talent2Level > 1) {
            sum += 0;
        }

        if (talent3Level <= 1) {
            sum += 6;
        } else if (talent3Level > 1) {
            sum += 0;
        }
    } else if (commIndex == 1) {
        if (talent1Level <= 2) {
            sum += 22;
        } else if (talent1Level <= 3) {
            sum += 19;
        } else if (talent1Level <= 4) {
            sum += 15;
        } else if (talent1Level <= 5) {
            sum += 9;
        } else if (talent1Level > 5) {
            sum += 0;
        }

        if (talent2Level <= 2) {
            sum += 22;
        } else if (talent2Level <= 3) {
            sum += 19;
        } else if (talent2Level <= 4) {
            sum += 15;
        } else if (talent2Level <= 5) {
            sum += 9;
        } else if (talent2Level > 5) {
            sum += 0;
        }

        if (talent3Level <= 2) {
            sum += 22;
        } else if (talent3Level <= 3) {
            sum += 19;
        } else if (talent3Level <= 4) {
            sum += 15;
        } else if (talent3Level <= 5) {
            sum += 9;
        } if (talent3Level > 5) {
            sum += 0;
        }
    } else if (commIndex == 2) {
        if (talent1Level <= 6) {
            sum += 31;
        } else if (talent1Level <= 7) {
            sum += 27;
        } else if (talent1Level <= 8) {
            sum += 21;
        } else if (talent1Level <= 9) {
            sum += 12;
        } else if (talent1Level > 9) {
            sum += 0;
        }

        if (talent2Level <= 6) {
            sum += 31;
        } else if (talent2Level <= 7) {
            sum += 27;
        } else if (talent2Level <= 8) {
            sum += 21;
        } else if (talent2Level <= 9) {
            sum += 12;
        } else if (talent2Level > 9) {
            sum += 0;
        }

        if (talent3Level <= 6) {
            sum += 31;
        } else if (talent3Level <= 7) {
            sum += 27;
        } else if (talent3Level <= 8) {
            sum += 21;
        } else if (talent3Level <= 9) {
            sum += 12;
        } else if (talent3Level > 9) {
            sum += 0;
        }
    }
    return sum;
}

// // Talent Material Count
function talentCount(talentIndex, talent1Level, talent2Level, talent3Level) {
    let sum = 0;
    if (talentIndex == 0) {
        if (talent1Level <= 1) {
            sum += 3;
        } else if (talent1Level > 1) {
            sum += 0;
        }

        if (talent2Level <= 1) {
            sum += 3;
        } else if (talent2Level > 1) {
            sum += 0;
        }

        if (talent3Level <= 1) {
            sum += 3;
        } else if (talent3Level > 1) {
            sum += 0;
        }
    } else if (talentIndex == 1) {
        if (talent1Level <= 2) {
            sum += 21;
        } else if (talent1Level <= 3) {
            sum += 19;
        } else if (talent1Level <= 4) {
            sum += 15;
        } else if (talent1Level <= 5) {
            sum += 3;
        } else if (talent1Level > 5) {
            sum += 0;
        }

        if (talent2Level <= 2) {
            sum += 21;
        } else if (talent2Level <= 3) {
            sum += 19;
        } else if (talent2Level <= 4) {
            sum += 15;
        } else if (talent2Level <= 5) {
            sum += 3;
        } else if (talent2Level > 5) {
            sum += 0;
        }

        if (talent3Level <= 2) {
            sum += 21;
        } else if (talent3Level <= 3) {
            sum += 19;
        } else if (talent3Level <= 4) {
            sum += 15;
        } else if (talent3Level <= 5) {
            sum += 3;
        } if (talent3Level > 5) {
            sum += 0;
        }
    } else if (talentIndex == 2) {
        if (talent1Level <= 6) {
            sum += 38;
        } else if (talent1Level <= 7) {
            sum += 34;
        } else if (talent1Level <= 8) {
            sum += 28;
        } else if (talent1Level <= 9) {
            sum += 16;
        } else if (talent1Level > 9) {
            sum += 0;
        }

        if (talent2Level <= 6) {
            sum += 38;
        } else if (talent2Level <= 7) {
            sum += 34;
        } else if (talent2Level <= 8) {
            sum += 28;
        } else if (talent2Level <= 9) {
            sum += 16;
        } else if (talent2Level > 9) {
            sum += 0;
        }

        if (talent3Level <= 6) {
            sum += 38;
        } else if (talent3Level <= 7) {
            sum += 34;
        } else if (talent3Level <= 8) {
            sum += 28;
        } else if (talent3Level <= 9) {
            sum += 16;
        } else if (talent3Level > 9) {
            sum += 0;
        }
    }
    return sum;
}

// // Traveler Material Count
function talentTravelerCount(talentIndex, talentPos, talent1Level, talent2Level, talent3Level) {
    let sum = 0;
    if (talentIndex == 1) {
        if (talentPos == 0) {
            if (talent1Level <= 1) {
                sum += 3;
            } else if (talent1Level > 1) {
                sum += 0;
            }
    
            if (talent2Level <= 1) {
                sum += 3;
            } else if (talent2Level > 1) {
                sum += 0;
            }
    
            if (talent3Level <= 1) {
                sum += 3;
            } else if (talent3Level > 1) {
                sum += 0;
            }
        }

        if (talentPos == 1) {
            if (talent1Level <= 4) {
                sum += 6;
            } else if (talent1Level > 4) {
                sum += 0;
            }
    
            if (talent2Level <= 4) {
                sum += 6;
            } else if (talent2Level > 4) {
                sum += 0;
            }
    
            if (talent3Level <= 4) {
                sum += 6;
            } else if (talent3Level > 4) {
                sum += 0;
            }
        }

        if (talentPos == 2) {
            if (talent1Level <= 7) {
                sum += 6;
            } else if (talent1Level > 7) {
                sum += 0;
            }
    
            if (talent2Level <= 7) {
                sum += 6;
            } else if (talent2Level > 7) {
                sum += 0;
            }
    
            if (talent3Level <= 7) {
                sum += 6;
            } else if (talent3Level > 7) {
                sum += 0;
            }
        }
    } else if (talentIndex == 2) {
        if (talentPos == 1) {
            if (talent1Level <= 2) {
                sum += 11;
            } else if (talent1Level <= 5) {
                sum += 9;
            } else if (talent1Level > 5) {
                sum += 0;
            }
    
            if (talent2Level <= 2) {
                sum += 11;
            } else if (talent2Level <= 5) {
                sum += 9;
            } else if (talent2Level > 5) {
                sum += 0;
            }
    
            if (talent3Level <= 2) {
                sum += 11;
            } else if (talent3Level <= 5) {
                sum += 9;
            } else if (talent3Level > 5) {
                sum += 0;
            }
        }

        if (talentPos == 2) {
            if (talent1Level <= 8) {
                sum += 12;
            } else if (talent1Level > 8) {
                sum += 0;
            }
    
            if (talent2Level <= 8) {
                sum += 12;
            } else if (talent2Level > 8) {
                sum += 0;
            }
    
            if (talent3Level <= 8) {
                sum += 12;
            } else if (talent3Level > 8) {
                sum += 0;
            }
        }
    } else if (talentIndex == 3) {
        if (talentPos == 1) {
            if (talent1Level <= 3) {
                sum += 4;
            } else if (talent1Level > 8) {
                sum += 0;
            }
    
            if (talent2Level <= 3) {
                sum += 4;
            } else if (talent2Level > 8) {
                sum += 0;
            }
    
            if (talent3Level <= 3) {
                sum += 4;
            } else if (talent3Level > 8) {
                sum += 0;
            }
        }

        if (talentPos == 2) {
            if (talent1Level <= 6) {
                sum += 20;
            } else if (talent1Level <= 9) {
                sum += 16;
            } else if (talent1Level > 9) {
                sum += 0;
            }
    
            if (talent2Level <= 6) {
                sum += 20;
            } else if (talent2Level <= 9) {
                sum += 16;
            } else if (talent2Level > 9) {
                sum += 0;
            }
    
            if (talent3Level <= 6) {
                sum += 20;
            } else if (talent3Level <= 9) {
                sum += 16;
            } else if (talent3Level > 9) {
                sum += 0;
            }
        }
    } else if (talentIndex == 4) {
        if (talentPos == 0) {
            if (talent1Level <= 1) {
                sum += 3;
            } else if (talent1Level > 1) {
                sum += 0;
            }
    
            if (talent2Level <= 1) {
                sum += 3;
            } else if (talent2Level > 1) {
                sum += 0;
            }
    
            if (talent3Level <= 1) {
                sum += 3;
            } else if (talent3Level > 1) {
                sum += 0;
            }
        }

        if (talentPos == 1) {
            if (talent1Level <= 4) {
                sum += 6;
            } else if (talent1Level > 4) {
                sum += 0;
            }
    
            if (talent2Level <= 4) {
                sum += 6;
            } else if (talent2Level > 4) {
                sum += 0;
            }
    
            if (talent3Level <= 4) {
                sum += 6;
            } else if (talent3Level > 4) {
                sum += 0;
            }
        }

        if (talentPos == 2) {
            if (talent1Level <= 7) {
                sum += 6;
            } else if (talent1Level > 7) {
                sum += 0;
            }
    
            if (talent2Level <= 7) {
                sum += 6;
            } else if (talent2Level > 7) {
                sum += 0;
            }
    
            if (talent3Level <= 7) {
                sum += 6;
            } else if (talent3Level > 7) {
                sum += 0;
            }
        }
    } else if (talentIndex == 5) {
        if (talentPos == 1) {
            if (talent1Level <= 2) {
                sum += 11;
            } else if (talent1Level <= 5) {
                sum += 9;
            } else if (talent1Level > 5) {
                sum += 0;
            }
    
            if (talent2Level <= 2) {
                sum += 11;
            } else if (talent2Level <= 5) {
                sum += 9;
            } else if (talent2Level > 5) {
                sum += 0;
            }
    
            if (talent3Level <= 2) {
                sum += 11;
            } else if (talent3Level <= 5) {
                sum += 9;
            } else if (talent3Level > 5) {
                sum += 0;
            }
        }

        if (talentPos == 2) {
            if (talent1Level <= 8) {
                sum += 12;
            } else if (talent1Level > 8) {
                sum += 0;
            }
    
            if (talent2Level <= 8) {
                sum += 12;
            } else if (talent2Level > 8) {
                sum += 0;
            }
    
            if (talent3Level <= 8) {
                sum += 12;
            } else if (talent3Level > 8) {
                sum += 0;
            }
        }
    } else if (talentIndex == 6) {
        if (talentPos == 1) {
            if (talent1Level <= 3) {
                sum += 4;
            } else if (talent1Level > 8) {
                sum += 0;
            }
    
            if (talent2Level <= 3) {
                sum += 4;
            } else if (talent2Level > 8) {
                sum += 0;
            }
    
            if (talent3Level <= 3) {
                sum += 4;
            } else if (talent3Level > 8) {
                sum += 0;
            }
        }

        if (talentPos == 2) {
            if (talent1Level <= 6) {
                sum += 20;
            } else if (talent1Level <= 9) {
                sum += 16;
            } else if (talent1Level > 9) {
                sum += 0;
            }
    
            if (talent2Level <= 6) {
                sum += 20;
            } else if (talent2Level <= 9) {
                sum += 16;
            } else if (talent2Level > 9) {
                sum += 0;
            }
    
            if (talent3Level <= 6) {
                sum += 20;
            } else if (talent3Level <= 9) {
                sum += 16;
            } else if (talent3Level > 9) {
                sum += 0;
            }
        }
    }
    return sum;
}

// // Weekly Boss Material Count
function weekCount(talent1Level, talent2Level, talent3Level) {
    let sum = 0;
    if (talent1Level <= 6) {
        sum += 6;
    } else if (talent1Level <= 7) {
        sum += 5;
    } else if (talent1Level <= 8) {
        sum += 4;
    } else if (talent1Level <= 9) {
        sum += 2;
    } else if (talent1Level > 9) {
        sum += 0;
    }

    if (talent2Level <= 6) {
        sum += 6;
    } else if (talent2Level <= 7) {
        sum += 5;
    } else if (talent2Level <= 8) {
        sum += 4;
    } else if (talent2Level <= 9) {
        sum += 2;
    } else if (talent2Level > 9) {
        sum += 0;
    }

    if (talent3Level <= 6) {
        sum += 6;
    } else if (talent3Level <= 7) {
        sum += 5;
    } else if (talent3Level <= 8) {
        sum += 4;
    } else if (talent3Level <= 9) {
        sum += 2;
    } else if (talent3Level > 9) {
        sum += 0;
    }
    return sum;
}

// // Event Material Count
function eventCount(talent1Level, talent2Level, talent3Level) {
    let sum = 0;
    if (talent1Level <= 9) {
        sum += 1;
    } else if (talent1Level > 9) {
        sum += 0;
    }

    if (talent2Level <= 9) {
        sum += 1;
    } else if (talent2Level > 9) {
        sum += 0;
    }

    if (talent3Level <= 9) {
        sum += 1;
    } else if (talent3Level > 9) {
        sum += 0;
    }
    return sum;
}

function sumClass(className) {
    let classValue = document.getElementsByClassName(className);
    let sum = 0;
    for (let classIndex = 0; classIndex < classValue.length; classIndex++) {
        sum += parseInt(classValue[classIndex].innerHTML);
    }
    return sum;
}