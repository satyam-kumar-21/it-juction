import React from 'react';

function VisionMissionSection() {
  return (
    <div className="bg-green-400 text-blue-900 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Our Vision & Mission</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
             <img src="data:image/jpeg;base64,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" alt="Mission" className="mb-4 rounded-full" />
            
            <h1 className="text-xl font-bold mb-4">Our Vision</h1>
            <h2 className="text-gray-900 text-xl">
               
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>

          {/* Mission */}
          <div className="p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxUNDQ8VDg0PEBAODw0PDw8PFQ0QFRIWFhUVFRUYHSggGBslGxUVITEhJSkrLi4uFx83ODMsNyktLisBCgoKDg0OGhAQGislHyItLS0tLS8vLS0wLS8tLS8tLy0tLS0tLS0tLS0vLi0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABGEAACAgECBAMEBwQHBAsAAAABAgADBAURBhIhMUFRYRMicZEHFDJCUoGhI2KxwRUkM3KCssJjc5LwJUNEU1Rkg5Ois9H/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QANhEBAAIBAgMECgEDAwUAAAAAAAECAwQREiExBUFRYRMiMnGBkaHB0fCxFELhM3LxIzRDUmL/2gAMAwEAAhEDEQA/APTZm1iAQCAQCAQCAQCBO0KNoE7QDaAcsCNoBtANoREAgEAgEAgEAgEAgEKIQQCAQCAQCAQJ2hUgQG2gTtAnaAcsA5ZAbSiCIEbQIIgQRAiERAIBAIBAIBAIUQggEAgEAgSBCmAgMBAYLAnlkEhYE8sKnaBG0A5YBywhSsGyCsBSJQpWBBEBYQQCAQCAQCFEIIBAIBAYCFMBAYCQOFgMBCpAgTywJ2gTywJ5D5Qm5doEbQqNoEEQFIgKRCFIlCEQIhEQCAQCAQohBAIBAYCFOBAYCQOBCnAgSBAbaBIWBRl5tFPW+6ukf7W1K/8AMZja1a9Zhsx4cmT2KzPuiZcxxfxJgvg31U5lT3PXy1rW+5ZuYdARNGbLTgmInm9Ps/Q6iuopa2Odt+e8PLqsy5DvXfah80utX+BnnRa3dL6ecVJ9qsfGI/DbYPF+o07bZTWqPuZG1wP5n3v1myufJHe5cvZulyf2RE+XL/H0dTpP0kqSFzaOT/bUEuPi1Z6j8iZ001fdaHl5+wp23w238p5fX8u107PoyU9rjWrcnYlGBKnyYd1PoZ11tFo3h4ebDkw24clZiWTtMmspEBSICEQhCJQhEBYQQCAQCFEIIBAYCFOBAdRIHAhTgQGAgMFgaTWOJasewY1KNmZrfZxaNmK+tjdkHb5zTfNFZ2jnLu0+hvlr6S0xWn/tP28WAdJ1bM65eWMCg9sXD96z/HaR3+BImHBlv7U7R5Oj+o0eCP8ApU458bdPkuxvo+01TzWUtkP4vfdYxJ+AIEsabHHXmxt2xqpjatorHlENjXwtpyjZcGj86lb9TM/Q4/CHNbX6m3XJb5qr+DtMf7WFUPVA1f8AlIknBjnuZ17S1demSf5/lps/6NcNx/V7LMduuwLe2Xf1Ddf1mq2krPSdnZi7bzx7cRP0/j8OM1zgvOxAXZBkUruTbRzNyr5shHMv6j1nLfBej2NN2np887RO0+E/aWk0/PtocX41rVWeDoR1HkQejD0O811tNZ3q7cuKmWvBkjeP35PUeEuNa8wjHyQKcs9FI6V5B/d3+y37p/Imd+HURblbq+X1/ZVsG98fOv1j8+91hE6njlIhSkQEYQisiUIRAWEEAgEKIQQJAhTgQHUSCwCFOBAYCA4EDRZeVfmOcbBf2WOjFMnUF2JDDvVj7928C/Ydu/bRNpvO1Z5eP4d+PHjwRx5o3tPSv3t5eEdZbPSNIoxK/Z49fID1dj1e1vxO3djM6UrSNoc+fUZM9uK8+7wjyhnqhPaZtK5aPM/KQ2MKl8oNk+yXyg2K1A8P/wBl3NlTVkdf1EGzj+KuB6cve7H2x8s9dwNq7j++o7H94fnvObLp4vzjlL1dF2rkwepk51+se78PJ83Esosai9DVchHMjd1PgQQdiPEEGefNZrO0vqseSmSvFSd4l6VwFxacjbCy2/rCj9jaf+0KB1U/vgD/ABD1nfp8/F6tnzXavZ3o59Nij1e+PD/H8O1KzreIQiApECthAQiVFZECIQQCFEIIDqIU4EgsUQqwCAwEBwIGu1Mvc4wqWavmXnyL0OxpqPQKpHax+oB8AGPfaar7zPDHxdWCK0r6W3PurHjPj7o/nbzbHGx0qRaqlFdaAKiKNgqjwEziIiNoc97WvabWneZZVdW/U9vLzlRcBIqYBAIBAIFT1b9R3/jA5bjPhdM+ndAEy6wfY2kbb7Hc1ufwn9Cd/jpzYoyR5u7s/XW019p9mesfePP/AIeMHnrfxquqf1DVWo36EMP0nm84nzfY+revjEx84n8vaeENdGdii07C9D7O9Aezjsw9GGx/PbwnqYcnpK7974vX6T+my8MdJ5x++TcsJucRCICEQKyJUIwgIYREAhRCJEKsUQLFEhCwCFOBAcCAuRcK0axuoRS2w7t5KPUnYD4zG07RuypTjtFY71em4prQ8/W6xjbc/wCKw7fooAUeiiY0rtHPqzzZIvb1ekco93+erPqTf4TNriGRIogEAgECCfGB5/x7xFkJcMehjVXQtOXaybFskc/MEHku1Z389wO2++u+SKTWPGXRg085aXtE+xG+3j+7Oz0/V8bIAbHvrt3G+yOrEfEb7zY5omJ5wNRLIPbKCwXrYg6lk8Sv7w7+o3HlCvM/pR0ZQU1KgA13bJey9ixA9lYPMEdCfRZxarHt68PouxNVvE4LT05x7u+Ph+Wm+j7Vvq2cqsdqckChx4Bif2bfk3T/ABTVp8nBfyl2dq6f02nmY615x7u/98nsZE9R8erYQEIgVsIRWRKEMBYQQohDqIVYogWLIpwIFiwHAgVXJzMi+Ab2p/wbcv8A8iD/AIZhPOYhspO0TPw+bKAmTWyFXYbSMjQCBxmtcVs3MMR1pxkf2L6g1bXG27fY04lI63OPFvsjr32Owa+nh3JyfftxuffqLdXybL3b1+rUkVpv5bj4QLH4Rvq95MTFYjxwbcrTrQP3TzMpPx2EDV67lZhwqMPKaxBkDK+sC0qLiqOAlRdenLysNyPtbd9jNWfJOOm8OvQ6euoy8F55bTLV0F8jJWu/KSm2xK6kutrYq5X3a6akX8ydz4+O/TTWI1PO3SO52ZJv2fPDj52tzm0xy90R/LvOGODUxbDlXsuRl7FEsFfItKHuEBJO526nf5TopjrSNoebnz3zX479XVmZtTkMzCDjJ0lztXdW1mKT9zn3PKP7rjoPQTG9YtWYbtPlnDlrkjul4q6sN1b3XBKnzRwdj8iP0nkbPu4mOsdHvui531nFqyfG2pHP97b3v13nsY7cVYl8FqcXos1sfhOzKImbSQiBWwgVsIRW0oQwghUiEOIVYsgsUQqwQHAgOJBKj3ifRR8O5/nJ3su7ZdWOsqL5FEDm+M8s8iYaWexOUXN9wblOPh1rzX2A+B25UB8C+/htA1mjVUY2P/S+VV7P3ErwcRU64eO2y00VJ/3r7jmI6ksB2WBiXZ2bl2tWTc9i7c+FgWLj14e/ZMjMI3a3zVNtvLsYFb25OnWLfe9tNQBCYLZ7ag+oXEdFVrF3qRR1ZvUdvGTMRG89GVK2vaK1jeZa/SdOytXyWyLnK1g8tuQnZQOox8bfoAD9pvj49tMV9LPFbp3R95dlskaaJpin1u+0d3/zH3n9jZcHphpmAeyyTcxyKarcz2O1NtJ2srr5fvEbncjsvTpNlMdaezGzmy58mXaclpnZ6IJm1CBzHGANdmPlL0KWNUT5hgGH6p+sR1HkfFlITUMhV6L7XnA9LEWz/UZ5WaNrzD7XQXm+mx2nw/jk9I+i7I59O5D1NORdV38DtYP887tLO9Hz3bVOHU7+MRP2+zqzOl5KswEaBWwhFTShDAiBIjvFgkFiiBYsKsWA6wMTW9Vrwsd8u5WauvkBWsKWPO4QbAkDuw8ZrveKV4pb9Np7ajJGOu28+PlG7ntP+kbDuuroWnIV77a6VZko5QzkKCdrCdtz5TTXVUmYjaXpZOxs9KTebV5RM8t+74O3q7/lOmXjwtkUQOB43HNfkKe31LExv/Tys3kt/SsQM7jTINd1Gw93Gx87OROwNtNIWvp47e1J29IGwwVTTtL9oiG4045yLOQbvk2lOexz5szEkn1gcNo2Bkazecm2z9h9m3JrPuhP/D43kPxP/Ptpis3ne3SOkfeXZbJXDTgxTvaeto8PCv3lu9Id69RrVW5cdb8vTasWsctVVFWOtysB4uWHVj8JvcZdQHJqFgXpyanpd42/HkI1FnzVRIPQIBA53jkf1UHyuqP67fzgcNq3BeXnXHLx3pFbpUu1tlitzIgU7gIR4ec482nta82jbm97QdqYcGCMd4tvG/SI8Znxh1XAmgX4GPZTkNWzWXm1fZMzAL7NF6llHXdTN2nxzSJiXD2nq8epyVtTflG3P3z5uiadDzSNAraBW0CpoQhlEQAQLVgWLIqwQLFgOIGj49o59LyV8qhb/wC3Yr/6Zo1Eb45d/ZduHV4589vnG33eNabbyZFNnb2eRRZv5ctin+U8ys7TEvr8teLHaPGs/wAPotO/p/Gey+CWyKIHF8bYLNevKeX67i24VbHsuWjC/G3+JSwQLNStObi4+p49Ztso5jbijYM9Tqasqnr2ddyQPxVgeMCnhviJMahKcgtZhoAmJqVddliWUge6l4UFqbUUBW5wASPPcAM7K4tpKFNMQ5l+x5AitXRV5tbcQERRvuQCW8gYGv4NwxZYMrn9pi4yXBMphyjNyrm5snIXyrGwRT225ttxsYGJpz/XMyu1QeXJy21IH/yWMnscZj6WOecehMD0MQCBzHHto9hXX4veuw8wqkn+XzgZOg9KB6sB/wA/KFhszKwIYCGUVNARoFTQisyggAgWLAsWRViwLBAsEBMvHFtT0t1WxHrIPkwI/nMbRvGzPHbgvFvCXzxbSULVN0dC1TeGzKSp/UTxpiYffxbfa0dJ5/B75wnqYysKnIH2mrCuPKxDyOPmpnrYrcVIl8RrcPoc9sfn9J5w3kzcwgYGtaWmXQ2O5K82xSxejU2Kd0sQ+DKwBHwgcVg52Vh5TIUU5T+9k4AIrTUWA2+t4Lt05yB79R8vD7TBnKdJyLWtqyX03MfrdWtrYNrt520vsHPTuQfjAnNxNLUb6hqTZVe+wx8jLRq7D5GivYWfAgwMTXtbOQi0CqzHwbOVUxQhry9VHhVVT0NNPbmdtvd5hsB1gdHwxo70B8jJ5frmRye1Ff2MetARVj1n8CAkb9NyWOw3gb2AQOF4tyPbZqUr1XHXr4+/ZsT8gF+cDf6YuwRPwqbD8T7q/wCr5Sd7Lb1Zn4Ng0yayGAhlFZgVtAraEVtLAWBIgWLILFhViwLRAcQHEg8c+krSfq+cbQNq8sG9f94NhaPmQf8AFPN1OPhvv4vr+ydR6XTxWeteXw7m4+ibWuSx9PsOy2b3UE7bc4250+JGzD4NNmlybTwy5O2tNvWM1escp93d+Pk9TQ+E7Xzp4BAw9T0yjKr9lk1Lam4IDb7qR2KsOqn1B3gaHJ4TsPu15jWVAALRnUU5qoB5M4FnzYwEx+Er1Pu5deN5nCwMahiPLmYOR+UDc6ToONikvUpa5/7TJudrrbPQ2MSdvQdPSBtIBAwdZ1JMWhr368vRV8Xc9FUfn/OBw+iUM7m60+87NbY56Dcndj6AfwhdpnlDsNJBKe2I2N2zKp392oDasbefL1PqxmNOfPxbM3qzwR3cvj3/AFZbTNoIYCGUVmBW0CtoRWZYCwJECwQLFkVYIFggOIDiQaPjTQvr2I1aj9vX+1oPQftAPs7+AYdPlNOfHx02d/Z+q/p80WnpPKf3yeJ1WPU4dCarqn3VuzV2KfLzB7ieZEzE7977GYrasxPOJ+sPc+EOIq9QxxYNkvTZL6hv+zfbuPNT3B+I7gz08WWMld3xmt0ltNk4Z6T0n9729Swb8p+1328x5ibXIsgEAgEAgECjMy66UNtzhK1G5Y/89T6QPP8AUM6zPuDkFaU3FVR8PNm/eP6Dp5wraYOJ7V/qidaq+Vs1vD8SY48CW7uPBdh97phb1p4Y6d/4dFK+ip6Wes+z97fjz6dHVmbHKrMIUwEMoqaAjQKmhFbSiIAIFiwLVkDrCrFMCwGA4kDCFec/SRwiSW1HFXcnrlUqOvQbe1UD4DmH5+c4tRh/uj4voeyu0OmDJP8Atn7fhwmi6tdh3Lk4zbOOhXc8tqfhYeI/h3E5KXms7w9rUaemeno7x/jzey8PcRY2p1bIxqyVAZqeYCyltvtIfvL67bHsR4T0sWWLx5vkdZocmmtz5x3T+97NfVHxzy5ik19ly61JRv76jqh+Y+HabXG2ePk12rz1Otin7yMGHzEC6AQFZgBueg8z0gaHVOLMerdaj9ZtHTkqPug/vP2H6n0gcve2RnWB7zuAd0pUHlr+A8T6nr8IF+IGsc4uAQ1qnlvzQA9WF5gHs9vkvYdz5TXN954afPwdlMEY6+lzxy7q99vxHn39I8XYabg149S01DZV6kk7tYx6s7t95idyT5mZ1rFY2hzZMtsluK3/AB5fBkGZNZDCEMBGlFbQK2gVtCKzKIgAhDrCrFMhCxTCrFMBxAsBkDAwphA83404AO5ytNTuS1mIOm5PUtV/Nfl5Tizabvo+h0Ha0bRjzz7p/P5eeU2vW4dGaq2tjsyko9bA9R5g+k44mYl71q1tG1o3ifq7vQvpLsRRVqNX1hOxvqCBz1+8nRT8Rt8J1U1Ux7TxdT2LW074Z28p6fN0GOdMyz7TBy1ptOxKB2pbf1U7GdVctLdJeLm0WfD7dJ+3zZT4Wp1fYyXYeort/wAy7zY5WNZZqh6HIYf3aqVPzCwMa/SMiz3smx2XxNrkLt+eywRznaGuu1DT8Yiv2n1m4nlXHxFNzs3l06D5zTbPSO/f3O/D2bqMkb7cMeNuUNph6Pn5v9v/ANGYR70VsDk3jfs7/cU+Q6ybXv15R9Wyb6bTex69/GfZj3R3/F1+n4FONUtGPWKqkGyov8ST1J9T1m6tYrG0PPy5b5bTe87zK8mZNZSYCEwhDKEYwK2MCtjArYyorMCIEwhgYVYpkFimFWCA6wHBkDiAwMKYGBoeI+EcTP8AesU1X+GRVsG9OYHo49D85pyYa5Oru0naGbTcq848J/eTzjWfo/z8ck1KMur8VRAcD1rY/wACZx30969Ob6DB2tp8ketPDPn0+blcikqeS1CjfgsUqfk055jbq9OtotG9Z39y7Gzbqv7G+2r0rusQfIHaWLTHSWF8dL+1WJ98Q7zhDSMnUMY5Fmq5VJ9o9XIthPRduu5PrOvFS2Su82l4mu1OLS5eCMNZ5RLdVfRtglg+TfkZjDrtdf7pPwUA/rNsaWvfMy5LdtZ4jbHWtfdDp9L0fFxRy4tCUjbYlFAJ+LdzN1aVr0h5ubUZc075LTLOJmbSgmAhMBTCFJlCGBWxgIxgVMYRWZYCwIgEIkQqxZBYphVgMBwYDgwHBkDAwGBhUwK2q38YGJmaSlw5beWxfw2Itg+TAyTET1hlW9qTvWZj3cmku4BwnO/sUX+4vJ/Ca5wY561dde0dVX/yT8ef8szT+Fkx19nQ7InMX5QTtzHuZnStaRtVozZ8ma3HkneejY16cV/6wmZNLISnb7xMC0QAmApMIQmApMoQmBWYCMYFZMqKyYCwghRCJgMphVimQWAwp1MBwYDgwGBkDAwJBhTbwDeBO8A3gG8CN4EEwF3hCkwFJlCMYCEwEJgVsYQjGUIYREAhRCCBIhTgwLFMgsBhTAwNFx5q92Hp75OMwW5XpVWZQ4AZwD0PoZryWmtd4dOjxVy5Ypbpzab6MuML89rsfMYNfWFurKoK96t+Vug8iV/4phiyTbfd06/SVw8NqdGm48+kDNxs6zHwrFSqhURuapLN7duZjufiB+UwyZbRbaG7SaHHkxRa/WfNueOOKczEbAGPYq/W0DX81aNzHentv2+23aZXvMcOzTptNjyek4v7en1W8ccT5iZ1WkaaUqvuClsi0A8vPzcqrv0HRSSdj3AEuS878NU0unxzjnLk6R3NffqOvaVfV9bb+k8S1trDVSzMgH2vsqCpAO47g7Sb3rPPm2RTS56zwerMebN4x4ozTqFWjaYyU22qpfItHUFgWAXfoNlB8CSSAJb3ni4asNNp8fopzZOcR3MN9U13S8mpc1v6SxLTs71UM7VruAxHIoKsN99juCN5N71nnzZxj02ek8Hq2jxlsda4ly6tfo01HUYlopLoa1JPMLN9m7/dEtrzx7NWPT0tprZJ6wo4r4uzXzhpGjKpyR0vucA+zOwYgE+6oUHcsQe4AG8XvMzw1ZafTY4x+mzTya3U9V4g0flyMyyvPxGcJZsAeQnsOYKpQnbo2xG/fuJjM5Kc56NtMWl1O9aRNZbfjzi22jAxs3TrAFyrBsz1q+6GsttsexBEyyZJisTVo0mlrfLamTubPgjiYajh+1YgZNI5MhV6bWBSVcD8Lbb+XceEzx34o82nVaf0OTh7u5r/AKMuIcnUMa23LYO9dyopVFQBTWG7Dv1MmK82id2zX6emG8RXvh15M2uEjGAjGElWTKEJgLCCAQohBAIDAwpwYFimQODCuT+lQ/8ARNv+8x//ALRNWb2Hb2d/3Ee6f4cdReNLydO1Ug+wycCtMgKNy7LUEb4kgVn8jNETwTW3jD0Jr/UUyYe+Lcvm0udiWHR31G/rdnagzcxHUoqOSQfIuW/4ZjMervLfW0f1EY69K1dR9J329J/3a/5sebMv9rk0PTN++LecZ6dpup54wWyHxtWrAVbFqJBXl9qqtvsG6HcbEGZXrW1tu9z6XJmwYuPbekuf1X+meH/Z3nOOZiF+T2djOQdgTy8r7lNwD1U9DMbRfH3urH/T6vevDtLc8SafpmsZa0JkPi6otKOCKmIZCi2KG32DEB+nKQe/lMrRW89ebnwXzaek2mu9Gl1W/WeH2rsfN+u4jsUFdjuwblHMV2fdk6b7EEiY248fe30jT6uJjh2lma84binDYb7NXjMAe+xW09Zbf6kMMUbaO/xRwhYKOI82rIPLZe+R7Et9/mtFihd/NNth6RTlknddT6+kpNekbOm+lLKrr0q5bdua7kqqVu7Wc4boPQKT6bTZmmOFydn1tbPWY7nAcUVPXw7p4fcMbrHG/Q8rLay/oRNFt/Rw9HTzFtZkmPD7w3Gu1touemo0KTgZyivKqQbCt2ALbAdN+pdfUOPGZW9S28dGjDMarHOO3tVnkyfoV6YeQO/9ZXr5/slmWn6S19q/6lfd93oJM6HmEYwhCZQhMBYREAgEKIQQCAQGBhTgwHBkVruI9HXPxmxHc1K7I3OgDEcjcw6H4TG9eKNm7T5pw5IvEbsHVeD6cnAo057WUYvs/Z3hVLe6hU7r26g/pMbYomsQ2Y9XamW2SI6jWeDqcnBp072rVVY/LyuqqzNyqV6g+e5Mlse9Ygxay1Mtsm28ybiLhCvOOMXuev6koVOVFb2mxQ+9v2/sx285bY4tt5Lh1dsUWiI9ocWcG0ahYuT7R8bLTYDIq2JIG/LzDp28CCDJfHFuZp9ZbDHDtvHg1dH0c+0sV9S1C7PSs7rS+6q3od2J2+G28xjD4y2z2htExjpFd2y4p4IozrVyktfEy0AAvp+9y/Y3XzHbcEHaZXxRad4lrwa22KvDMRMeDX430ch7Vt1LOt1AVndarN1Q9uh3YnbzA23mMYfGd2y3aG1ZjHWKtvqHCld2pV6s1zLZSEApCrytyBu57/ePymc497cTRTVWrhnFt1V8WcGY2ostrM2PlIAq5FW25AO6hge+x7HoRF8cW5rp9ZfDHDtvHg02L9GqNYtmo5t2eqdqn5kBHkSWJ2+G28wjD4zu327RmI2x1irfcXcMV6lSmO9jUJU/Ovs0Q/cKcux6AbGZ3pxRs5tNqrYLTaI33hm6xpdWXjPh3da3QJzDbdGUe46+oIBmVqxaNmvFltjvF69Ya/hPhtNNqemu1rhbYLSzqqkEKF2G3h0kpSKRs2anUzntEzG20N2WmbmITKEJgKYREAgEAhRCCAQCAQGBhTgwGBgMGkDAwpt4E7wJ3gG8A3gRvAN4EEwILQFLQELQhSZQpMBSYREAgEAgEKIQQCAQCAQGBhTAwJBgMDIGDQJ3hU7wDeAbwDeBG8CC0BS0IgmUKTAUmAsIIBAIBAIBCiEEAgEAgEAgTAkGFSGgTvAbeQHNAN4BvAN4BzQIJlC7xsIJgRvCIgEAgEAgEAgEKIQQCAQCAQCAQCAbwJ3hU7wDmgHNGwN42BzQDeBG8A3hEQCAQCAQCAQCAQCFMIQQCAQCAQCAQCAQCAQCFEAgEAhBAIBAIBAIBAIBAIBAIV//2Q==" alt="Mission" className="mb-4 rounded-full" />
            <h1 className="text-xl font-bold mb-4">Our Mission</h1>
            <h2 className="text-gray-900 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionSection;
