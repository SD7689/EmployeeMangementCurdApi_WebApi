﻿using System;
using System.Collections.Generic;
using System.Text;

namespace QualityMeasurement
{
    public class Inch
    {
        public int inch;

        public Inch()
        {

        }

        public Inch(int inch)
        {
            this.inch = inch;
        }

        public int EqualValue()
        {
            return this.inch;
        }
    }
}
